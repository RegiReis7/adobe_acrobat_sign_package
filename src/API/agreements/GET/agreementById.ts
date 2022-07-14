import axios from "axios";
import { Headers } from "../../config/types";

export interface AgreementInfo {
  name: string;
  participantSetsInfo: ParticipantSetsInfo[];
  signatureType: string;
  status: string;
  agreementSettingsInfo: AgreementSettingsInfo;
  ccs: Cc[];
  createdDate: string;
  deviceInfo: DeviceInfo;
  documentVisibilityEnabled: boolean;
  emailOption: EmailOption;
  expirationTime: string;
  externalId: ExternalID;
  fileInfos: FileInfo[];
  firstReminderDelay: number;
  formFieldGenerators: FormFieldGenerator[];
  formFieldLayerTemplates: FileInfo[];
  groupId: string;
  hasFormFieldData: boolean;
  hasSignerIdentityReport: boolean;
  id: string;
  isDocumentRetentionApplied: boolean;
  lastEventDate: string;
  locale: string;
  mergeFieldInfo: MergeFieldInfo[];
  message: string;
  notaryInfo: NotaryInfo;
  parentId: string;
  postSignOption: PostSignOption;
  reminderFrequency: string;
  securityOption: AgreementInfoSecurityOption;
  senderEmail: string;
  state: string;
  type: string;
  vaultingInfo: VaultingInfo;
  workflowId: string;
}

export interface AgreementSettingsInfo {
  canEditAgreementSettings: boolean;
  canEditElectronicSeals: boolean;
  canEditFiles: boolean;
}

export interface Cc {
  email: string;
  label: string;
  visiblePages: string[];
}

export interface DeviceInfo {
  applicationDescription: string;
  deviceDescription: string;
  deviceTime: string;
}

export interface EmailOption {
  sendOptions: SendOptions;
}

export interface SendOptions {
  completionEmails: string;
  inFlightEmails: string;
  initEmails: string;
}

export interface ExternalID {
  id: string;
}

export interface FileInfo {
  document: Document;
  label: string;
  libraryDocumentId: string;
  notarize: boolean;
  transientDocumentId: string;
  urlFileInfo: URLFileInfo;
}

export interface Document {
  createdDate: string;
  id: string;
  label: string;
  numPages: number;
  mimeType: string;
  name: string;
}

export interface URLFileInfo {
  mimeType: string;
  name: string;
  url: string;
}

export interface FormFieldGenerator {
  formFieldDescription: FormFieldDescription;
  formFieldNamePrefix: string;
  generatorType: string;
  participantSetName: string;
  anchorTextInfo: AnchorTextInfo;
  linked: boolean;
}

export interface AnchorTextInfo {
  anchorText: string;
  anchoredFormFieldLocation: AnchoredFormFieldLocation;
  pages: string[];
}

export interface AnchoredFormFieldLocation {
  height: number;
  width: number;
  offsetX: number;
  offsetY: number;
}

export interface FormFieldDescription {
  alignment: string;
  backgroundColor: string;
  borderColor: string;
  borderStyle: string;
  borderWidth: number;
  calculated: boolean;
  conditionalAction: ConditionalAction;
  contentType: string;
  defaultValue: string;
  displayFormat: string;
  displayFormatType: string;
  displayLabel: string;
  fontColor: string;
  fontName: string;
  fontSize: number;
  hiddenOptions: string[];
  hyperlink: Hyperlink;
  inputType: string;
  masked: boolean;
  maskingText: string;
  maxLength: number;
  maxValue: number;
  minLength: number;
  minValue: number;
  origin: string;
  radioCheckType: string;
  readOnly: boolean;
  required: boolean;
  tooltip: string;
  urlOverridable: boolean;
  validation: string;
  validationData: string;
  validationErrMsg: string;
  valueExpression: string;
  visible: boolean;
  visibleOptions: string[];
}

export interface ConditionalAction {
  action: string;
  anyOrAll: string;
  predicates: Predicate[];
}

export interface Predicate {
  fieldLocationIndex: number;
  fieldName: string;
  operator: string;
  value: string;
}

export interface Hyperlink {
  documentLocation: DocumentLocation;
  linkType: string;
  url: string;
}

export interface DocumentLocation {
  height: number;
  left: number;
  pageNumber: number;
  top: number;
  width: number;
}

export interface MergeFieldInfo {
  defaultValue: string;
  fieldName: string;
}

export interface NotaryInfo {
  appointment: string;
  notaryEmail: string;
  notaryType: string;
  note: string;
  payment: string;
}

export interface ParticipantSetsInfo {
  order: number;
  role: string;
  electronicSealId: string;
  id: string;
  label: string;
  memberInfos: MemberInfo[];
  name: string;
  privateMessage: string;
  visiblePages: string[];
}

export interface MemberInfo {
  email: string;
  id: string;
  name: string;
  securityOption: MemberInfoSecurityOption;
}

export interface MemberInfoSecurityOption {
  authenticationMethod: string;
  digAuthInfo: DigAuthInfo;
  nameInfo: NameInfo;
  notaryAuthentication: string;
  password: string;
  phoneInfo: PhoneInfo;
}

export interface DigAuthInfo {
  providerId: string;
  providerDesc: string;
  providerName: string;
}

export interface NameInfo {
  firstName: string;
  lastName: string;
}

export interface PhoneInfo {
  countryCode: string;
  countryIsoCode: string;
  phone: string;
}

export interface PostSignOption {
  redirectDelay: number;
  redirectUrl: string;
}

export interface AgreementInfoSecurityOption {
  openPassword: string;
}

export interface VaultingInfo {
  enabled: boolean;
}

export async function getAgreementById(
  url: string,
  headers: Headers,
  agreementId: string
): Promise<AgreementInfo> {
  try {
    const response = await axios.get(`${url}/agreements/${agreementId}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
