import { Criteria, Report } from "./interfaces";
import { Task } from "./task.model";

export interface Loan {
  creditArrangementId: string;
  introducerId: string;
  guarantors: Guarantor[];
  coSupports: any[];
  beneficialOwners: any[];
  brokerDetails: string;
  program: Program;
  salesperson: Salesperson;
  communicationDetails: CommunicationDetails;
  businessDevelopmentManagers: BusinessDevelopmentManager[];
  companyRiskStatus: string;
  companyRiskReviewRequired: boolean;
  entitiesWithHighRisk: any[];
  entitiesForRiskAssessment: EntitiesForRiskAssessment[];
  acn: string;
  gstRegistrationStatus: string;
  gstRegistrationDate: string;
  incorporationDate: string;
  hasAbnContinuation: boolean;
  hasGstContinuation: boolean;
  isABNContinuationEditable: boolean;
  isGSTContinuationEditable: boolean;
  additionalInformation: AdditionalInformation;
  partners: any[];
  creditReferences?: CreditReferences;
  productPricingId: string;
  productPricingDate: string;
  productCategory: string;
  product: string;
  productId: string;
  loanPurpose: string;
  isPrivateSale: boolean;
  baseAmount: number;
  totalAssetValue: number;
  financeAmount: number;
  brokerageType: string;
  brokeragePercentage: number;
  brokerageAmount: number;
  dateSubmitted: string;
  docFee: number;
  abn: string;
  entityName: string;
  legalName: string;
  isAssetBacked: boolean;
  contributionAmount: number;
  hasDefaults: boolean;
  vedaScore: string;
  repaymentTerm: number;
  repaymentTermUnit: string;
  establishmentFee: EstablishmentFee;
  accountKeepingFee: AccountKeepingFee;
  repaymentFrequency: string;
  repaymentTiming: string;
  repaymentAmount: number;
  loanType: string;
  isOldProduct: boolean;
  entityType: string;
  balloonRepaymentType: string;
  balloonRepaymentPercentage: number;
  balloonRepaymentAmount: number;
  loanInterestRate: number;
  isPricingOverridden: boolean;
  warehouseType: string;
  assetDetails: AssetDetails;
  channel: string;

  // NEW
  pricingStrategy: string;
  overallRisk: string;
  redBookValuation: RedBookValuation;
  recommendationScore: number;
  assessmentType: string;
  creditStatus: string;
  checklists: Checklist[];
  report: Report;
  tasks: Task[];
}

export interface Checklist {
  checkpoint: string;
  outcome: string;
  criteriaList: Criteria[];
  section: string;
}

export interface Guarantor {
  encodedKey: string;
  type: string;
  individual: Individual;
}

export interface Individual {
  encodedKey: string;
  firstName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  emailAddress: string;
  mobileNumber: string;
  homeStatus: string;
  address: Address;
  propertyAddresses: PropertyAddress[];
  driversLicense: DriversLicense;
  medicare: Medicare;
  passport: Passport;
  alternateContact: AlternateContact;
  fileNumber: string;
  identity: string;
  identityCheckStatus: string;
  identityCheckHasRerun: boolean;
  watchList: string[];
  kycResult: string;
  dvsPassed: string[];
  fraudAssessmentResult: FraudAssessmentResult;
  adultCount: number;
  dependentCount: number;
  riskStatus: string;
  riskReviewRequired: boolean;
  score: number;
  assetsAndLiabilitiesId: string;
}

export interface Address {
  encodedKey: string;
  streetNumber: string;
  streetName: string;
  streetType: string;
  suburb: string;
  postCode: string;
  state: string;
  completeAddress: string;
}

export interface PropertyAddress {
  encodedKey: string;
  streetNumber: string;
  streetName: string;
  streetType: string;
  suburb: string;
  postCode: string;
  state: string;
  ownershipType: string;
  completeAddress: string;
}

export interface DriversLicense {
  givenName: string;
  surname: string;
  number: string;
  cardNumber: string;
  state: string;
  dateOfBirth: string;
  expiryDate: string;
  frontSideBlob: FrontSideBlob;
  backSideBlob: BackSideBlob;
  documentReport?: DocumentReport;
}

export interface FrontSideBlob {
  isTemp: boolean;
  name: string;
  mimeType: string;
  uri: string;
  thumbnailUri: string;
  dateAdded: string;
}

export interface BackSideBlob {
  isTemp: boolean;
  name: string;
  mimeType: string;
  uri: string;
  thumbnailUri: string;
  dateAdded: string;
}

export interface DocumentReport {
  au10tixDocumentSubmissionReference: string;
  address: string;
  authenticity: string;
  dob: string;
  documentId: string;
  documentNumber: string;
  documentType: string;
  expiryDate: string;
  name: string;
}

export interface Medicare {
  cardName: string;
  number: string;
  referenceNumber: number;
  colour: string;
  expirationMonth: number;
  expirationYear: number;
  blob: Blob;
}

export interface Blob {
  isTemp: boolean;
  name: string;
  mimeType: string;
  uri: string;
  thumbnailUri: string;
  dateAdded: string;
}

export interface Passport {
  blob: Blob2;
}

export interface Blob2 {
  isTemp: boolean;
}

export interface AlternateContact {
  contactType: string;
  encodedKey: string;
  fullName: string;
  email: string;
  mobile: string;
}

export interface FraudAssessmentResult {
  result: string;
  factors: Factor[];
}

export interface Factor {
  type: string;
  result: string;
}

export interface Program {
  name: string;
}

export interface Salesperson {
  encodedKey: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumbers: string[];
  state: string;
}

export interface CommunicationDetails {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumbers: string[];
}

export interface BusinessDevelopmentManager {
  firstName: string;
  lastName: string;
  emailAddress: string;
  fullName: string;
}

export interface EntitiesForRiskAssessment {
  encodedKey: string;
  name: string;
  roles: string[];
  watchList: string[];
}

export interface AdditionalInformation {
  businessBackground: string;
  businessUse: string;
}

export interface CreditReferences {
  assetFinance: AssetFinance;
  mortgageStatements: MortgageStatements;
}

export interface AssetFinance {
  checks: string[];
  details: string;
}

export interface MortgageStatements {
  checks: any[];
}

export interface EstablishmentFee {
  amount: Amount;
  gstInclusive: boolean;
}

export interface Amount {
  currency: string;
  amount: number;
}

export interface AccountKeepingFee {
  amount: Amount2;
  gstInclusive: boolean;
}

export interface Amount2 {
  currency: string;
  amount: number;
}

export interface AssetDetails {
  type: string;
  name: string;
  yearOfManufacture: number;
  ageAtEndOfTerm: number;
  ageAtInception: number;
  make: string;
  model: string;
  description: string;
  supplierName?: string;
  supplierABN?: string;
}

export interface RedBookValuation {
  private: number;
  tradeIn: number;
}
