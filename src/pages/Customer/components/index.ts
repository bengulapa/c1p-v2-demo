export type AssetLiabilityType = "Asset" | "Liability";

export interface AssetLiability {
  name: string;
  description: string;
  value: number;
}
