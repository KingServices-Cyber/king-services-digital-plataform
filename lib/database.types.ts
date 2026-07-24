export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      leads: {
        Row: {
          company: string | null;
          created_at: string;
          doc: string | null;
          doc_type: string | null;
          email: string | null;
          id: string;
          message: string | null;
          name: string;
          phone: string | null;
          source: string;
          status: string;
          subject: string | null;
        };
        Insert: {
          company?: string | null;
          created_at?: string;
          doc?: string | null;
          doc_type?: string | null;
          email?: string | null;
          id?: string;
          message?: string | null;
          name: string;
          phone?: string | null;
          source?: string;
          status?: string;
          subject?: string | null;
        };
        Update: {
          company?: string | null;
          created_at?: string;
          doc?: string | null;
          doc_type?: string | null;
          email?: string | null;
          id?: string;
          message?: string | null;
          name?: string;
          phone?: string | null;
          source?: string;
          status?: string;
          subject?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
