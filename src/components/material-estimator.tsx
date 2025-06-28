"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { estimateMaterial, type MaterialEstimatorOutput } from '@/ai/flows/material-estimator';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Calculator, BarChart, FileText } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  spaceType: z.string({ required_error: "Tipe area wajib diisi." }),
  length: z.coerce.number().min(1, "Panjang minimal 1 meter."),
  width: z.coerce.number().min(1, "Lebar minimal 1 meter."),
  depth: z.coerce.number().min(1, "Ketebalan minimal 1 cm.").max(20, "Ketebalan maksimal 20 cm."),
});

type FormValues = z.infer<typeof formSchema>;

export function MaterialEstimator() {
  const [result, setResult] = useState<MaterialEstimatorOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      spaceType: "playground",
      length: 10,
      width: 10,
      depth: 5,
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    try {
      const estimation = await estimateMaterial({
        ...values,
        granuleColor: 'various',
        granuleType: 'EPDM',
        costPerCubicMeter: 150, // Example cost in USD
      });
      setResult(estimation);
    } catch (error) {
      console.error("Material estimation failed:", error);
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: "Gagal melakukan estimasi. Silakan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary" />
            Kalkulator Estimasi Material AI
        </CardTitle>
        <CardDescription>
          Hitung perkiraan kebutuhan dan biaya material EPDM untuk proyek Anda. Masukkan dimensi area di bawah ini untuk mendapatkan estimasi cerdas dari AI kami.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="spaceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipe Area</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tipe area..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="playground">Playground (Taman Bermain)</SelectItem>
                        <SelectItem value="jogging track">Jogging Track (Lintasan Lari)</SelectItem>
                        <SelectItem value="mini soccer field">Lapangan Mini Soccer/Futsal</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="depth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ketebalan Lapisan (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Contoh: 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Panjang Area (meter)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Contoh: 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lebar Area (meter)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Contoh: 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menghitung...
                </>
              ) : (
                "Hitung Estimasi"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      {result && (
        <CardFooter>
          <Alert className="w-full bg-primary/10 border-primary/20">
            <AlertTitle className="font-headline text-lg text-primary flex items-center gap-2">
                <BarChart className="w-5 h-5"/>
                Hasil Estimasi
            </AlertTitle>
            <AlertDescription className="space-y-3 mt-2 text-foreground/90">
              <p><strong>Estimasi Volume Material:</strong> <span className="font-bold text-primary">{result.estimatedVolumeCubicMeters} m³</span></p>
              <p><strong>Estimasi Biaya Material (USD):</strong> <span className="font-bold text-primary">${result.estimatedCostUSD.toLocaleString('en-US')}</span></p>
              <div className="pt-2 border-t mt-3 border-primary/20">
                <p className="font-semibold flex items-center gap-2 mb-1"><FileText className="w-4 h-4 text-primary"/> Catatan dari AI:</p>
                <p className="text-sm italic pl-1">{result.notes}</p>
              </div>
            </AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </Card>
  );
}
