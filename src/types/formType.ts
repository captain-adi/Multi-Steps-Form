import { z } from "zod";

export const personInfoSchema = z.object({
  firstName: z.string().min(3, "First Name must be at least 3 characters long"),
  lastName: z.string().min(3, "Last Name must be at least 3 characters long"),
  phoneNumber: z
    .number()
    .min(10, "Phone Number must be at least 10 digits")
    .max(12, "Phone Number must be at most 12 digits"),
  email: z.string().email("Invalid email address"),
});

export const professionalInfoSchema = z.object({
  company: z.string().min(2, "Company Name must be at least 2 characters long"),
  position: z.string().min(2, "Position must be at least 2 characters long"),
  industry: z.string().min(2, "Industry must be at least 2 characters long"),
  experience: z.enum(["0-1 years", "1-3 years", "3-5 years", "5+ years"]),
});

export const billingInfoSchema = z.object({
  cardNumber: z
    .number()
    .min(16, "Card Number must be 16 digits long")
    .max(16, "Card Number must be 16 digits long"),
  cardHolderName: z
    .string()
    .min(3, "Card Holder Name must be at least 3 characters long"),
  expiryDate: z.string().min(5, "Expiry Date must be in MM/YY format"),
  cvv: z
    .number()
    .min(3, "CVV must be at least 3 digits long")
    .max(4, "CVV must be at most 4 digits long"),
});

export type PersonalInfoType = z.infer<typeof personInfoSchema>;
export type ProfessionalInfoType = z.infer<typeof professionalInfoSchema>;
export type BillingInfoType = z.infer<typeof billingInfoSchema>;
export type AllFromDataType = PersonalInfoType &
  ProfessionalInfoType &
  BillingInfoType;
export type FormDataType =
  | PersonalInfoType
  | ProfessionalInfoType
  | BillingInfoType;

export interface Step {
  id: string;
  name: string;
  icon: React.ReactNode;
}
