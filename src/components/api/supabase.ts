import { createClient } from '@supabase/supabase-js'

const supabaseUrl:any = "https://kkfitpbyaphiwaggmisr.supabase.co"
const supabaseAnonKey:any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZml0cGJ5YXBoaXdhZ2dtaXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwNTYwMjYsImV4cCI6MTk4NDYzMjAyNn0.TAIS-YaqtqpsDY85FRUNUWD8V_Oc1FNaaNvuv6tuxXY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)