import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { ADLSGen1FileDataSetArgs } from "./adlsgen1FileDataSet";
export type ADLSGen1FileDataSet = import("./adlsgen1FileDataSet").ADLSGen1FileDataSet;
export const ADLSGen1FileDataSet: typeof import("./adlsgen1FileDataSet").ADLSGen1FileDataSet = null as any;
utilities.lazyLoad(exports, ["ADLSGen1FileDataSet"], () => require("./adlsgen1FileDataSet"));

export { ADLSGen1FolderDataSetArgs } from "./adlsgen1FolderDataSet";
export type ADLSGen1FolderDataSet = import("./adlsgen1FolderDataSet").ADLSGen1FolderDataSet;
export const ADLSGen1FolderDataSet: typeof import("./adlsgen1FolderDataSet").ADLSGen1FolderDataSet = null as any;
utilities.lazyLoad(exports, ["ADLSGen1FolderDataSet"], () => require("./adlsgen1FolderDataSet"));

export { ADLSGen2FileDataSetArgs } from "./adlsgen2FileDataSet";
export type ADLSGen2FileDataSet = import("./adlsgen2FileDataSet").ADLSGen2FileDataSet;
export const ADLSGen2FileDataSet: typeof import("./adlsgen2FileDataSet").ADLSGen2FileDataSet = null as any;
utilities.lazyLoad(exports, ["ADLSGen2FileDataSet"], () => require("./adlsgen2FileDataSet"));

export { ADLSGen2FileDataSetMappingArgs } from "./adlsgen2FileDataSetMapping";
export type ADLSGen2FileDataSetMapping = import("./adlsgen2FileDataSetMapping").ADLSGen2FileDataSetMapping;
export const ADLSGen2FileDataSetMapping: typeof import("./adlsgen2FileDataSetMapping").ADLSGen2FileDataSetMapping = null as any;
utilities.lazyLoad(exports, ["ADLSGen2FileDataSetMapping"], () => require("./adlsgen2FileDataSetMapping"));

export { ADLSGen2FileSystemDataSetArgs } from "./adlsgen2FileSystemDataSet";
export type ADLSGen2FileSystemDataSet = import("./adlsgen2FileSystemDataSet").ADLSGen2FileSystemDataSet;
export const ADLSGen2FileSystemDataSet: typeof import("./adlsgen2FileSystemDataSet").ADLSGen2FileSystemDataSet = null as any;
utilities.lazyLoad(exports, ["ADLSGen2FileSystemDataSet"], () => require("./adlsgen2FileSystemDataSet"));

export { ADLSGen2FileSystemDataSetMappingArgs } from "./adlsgen2FileSystemDataSetMapping";
export type ADLSGen2FileSystemDataSetMapping = import("./adlsgen2FileSystemDataSetMapping").ADLSGen2FileSystemDataSetMapping;
export const ADLSGen2FileSystemDataSetMapping: typeof import("./adlsgen2FileSystemDataSetMapping").ADLSGen2FileSystemDataSetMapping = null as any;
utilities.lazyLoad(exports, ["ADLSGen2FileSystemDataSetMapping"], () => require("./adlsgen2FileSystemDataSetMapping"));

export { ADLSGen2FolderDataSetArgs } from "./adlsgen2FolderDataSet";
export type ADLSGen2FolderDataSet = import("./adlsgen2FolderDataSet").ADLSGen2FolderDataSet;
export const ADLSGen2FolderDataSet: typeof import("./adlsgen2FolderDataSet").ADLSGen2FolderDataSet = null as any;
utilities.lazyLoad(exports, ["ADLSGen2FolderDataSet"], () => require("./adlsgen2FolderDataSet"));

export { ADLSGen2FolderDataSetMappingArgs } from "./adlsgen2FolderDataSetMapping";
export type ADLSGen2FolderDataSetMapping = import("./adlsgen2FolderDataSetMapping").ADLSGen2FolderDataSetMapping;
export const ADLSGen2FolderDataSetMapping: typeof import("./adlsgen2FolderDataSetMapping").ADLSGen2FolderDataSetMapping = null as any;
utilities.lazyLoad(exports, ["ADLSGen2FolderDataSetMapping"], () => require("./adlsgen2FolderDataSetMapping"));

export { BlobContainerDataSetArgs } from "./blobContainerDataSet";
export type BlobContainerDataSet = import("./blobContainerDataSet").BlobContainerDataSet;
export const BlobContainerDataSet: typeof import("./blobContainerDataSet").BlobContainerDataSet = null as any;
utilities.lazyLoad(exports, ["BlobContainerDataSet"], () => require("./blobContainerDataSet"));

export { BlobContainerDataSetMappingArgs } from "./blobContainerDataSetMapping";
export type BlobContainerDataSetMapping = import("./blobContainerDataSetMapping").BlobContainerDataSetMapping;
export const BlobContainerDataSetMapping: typeof import("./blobContainerDataSetMapping").BlobContainerDataSetMapping = null as any;
utilities.lazyLoad(exports, ["BlobContainerDataSetMapping"], () => require("./blobContainerDataSetMapping"));

export { BlobDataSetArgs } from "./blobDataSet";
export type BlobDataSet = import("./blobDataSet").BlobDataSet;
export const BlobDataSet: typeof import("./blobDataSet").BlobDataSet = null as any;
utilities.lazyLoad(exports, ["BlobDataSet"], () => require("./blobDataSet"));

export { BlobDataSetMappingArgs } from "./blobDataSetMapping";
export type BlobDataSetMapping = import("./blobDataSetMapping").BlobDataSetMapping;
export const BlobDataSetMapping: typeof import("./blobDataSetMapping").BlobDataSetMapping = null as any;
utilities.lazyLoad(exports, ["BlobDataSetMapping"], () => require("./blobDataSetMapping"));

export { BlobFolderDataSetArgs } from "./blobFolderDataSet";
export type BlobFolderDataSet = import("./blobFolderDataSet").BlobFolderDataSet;
export const BlobFolderDataSet: typeof import("./blobFolderDataSet").BlobFolderDataSet = null as any;
utilities.lazyLoad(exports, ["BlobFolderDataSet"], () => require("./blobFolderDataSet"));

export { BlobFolderDataSetMappingArgs } from "./blobFolderDataSetMapping";
export type BlobFolderDataSetMapping = import("./blobFolderDataSetMapping").BlobFolderDataSetMapping;
export const BlobFolderDataSetMapping: typeof import("./blobFolderDataSetMapping").BlobFolderDataSetMapping = null as any;
utilities.lazyLoad(exports, ["BlobFolderDataSetMapping"], () => require("./blobFolderDataSetMapping"));

export { GetADLSGen1FileDataSetArgs, GetADLSGen1FileDataSetResult, GetADLSGen1FileDataSetOutputArgs } from "./getADLSGen1FileDataSet";
export const getADLSGen1FileDataSet: typeof import("./getADLSGen1FileDataSet").getADLSGen1FileDataSet = null as any;
export const getADLSGen1FileDataSetOutput: typeof import("./getADLSGen1FileDataSet").getADLSGen1FileDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen1FileDataSet","getADLSGen1FileDataSetOutput"], () => require("./getADLSGen1FileDataSet"));

export { GetADLSGen1FolderDataSetArgs, GetADLSGen1FolderDataSetResult, GetADLSGen1FolderDataSetOutputArgs } from "./getADLSGen1FolderDataSet";
export const getADLSGen1FolderDataSet: typeof import("./getADLSGen1FolderDataSet").getADLSGen1FolderDataSet = null as any;
export const getADLSGen1FolderDataSetOutput: typeof import("./getADLSGen1FolderDataSet").getADLSGen1FolderDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen1FolderDataSet","getADLSGen1FolderDataSetOutput"], () => require("./getADLSGen1FolderDataSet"));

export { GetADLSGen2FileDataSetArgs, GetADLSGen2FileDataSetResult, GetADLSGen2FileDataSetOutputArgs } from "./getADLSGen2FileDataSet";
export const getADLSGen2FileDataSet: typeof import("./getADLSGen2FileDataSet").getADLSGen2FileDataSet = null as any;
export const getADLSGen2FileDataSetOutput: typeof import("./getADLSGen2FileDataSet").getADLSGen2FileDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2FileDataSet","getADLSGen2FileDataSetOutput"], () => require("./getADLSGen2FileDataSet"));

export { GetADLSGen2FileDataSetMappingArgs, GetADLSGen2FileDataSetMappingResult, GetADLSGen2FileDataSetMappingOutputArgs } from "./getADLSGen2FileDataSetMapping";
export const getADLSGen2FileDataSetMapping: typeof import("./getADLSGen2FileDataSetMapping").getADLSGen2FileDataSetMapping = null as any;
export const getADLSGen2FileDataSetMappingOutput: typeof import("./getADLSGen2FileDataSetMapping").getADLSGen2FileDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2FileDataSetMapping","getADLSGen2FileDataSetMappingOutput"], () => require("./getADLSGen2FileDataSetMapping"));

export { GetADLSGen2FileSystemDataSetArgs, GetADLSGen2FileSystemDataSetResult, GetADLSGen2FileSystemDataSetOutputArgs } from "./getADLSGen2FileSystemDataSet";
export const getADLSGen2FileSystemDataSet: typeof import("./getADLSGen2FileSystemDataSet").getADLSGen2FileSystemDataSet = null as any;
export const getADLSGen2FileSystemDataSetOutput: typeof import("./getADLSGen2FileSystemDataSet").getADLSGen2FileSystemDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2FileSystemDataSet","getADLSGen2FileSystemDataSetOutput"], () => require("./getADLSGen2FileSystemDataSet"));

export { GetADLSGen2FileSystemDataSetMappingArgs, GetADLSGen2FileSystemDataSetMappingResult, GetADLSGen2FileSystemDataSetMappingOutputArgs } from "./getADLSGen2FileSystemDataSetMapping";
export const getADLSGen2FileSystemDataSetMapping: typeof import("./getADLSGen2FileSystemDataSetMapping").getADLSGen2FileSystemDataSetMapping = null as any;
export const getADLSGen2FileSystemDataSetMappingOutput: typeof import("./getADLSGen2FileSystemDataSetMapping").getADLSGen2FileSystemDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2FileSystemDataSetMapping","getADLSGen2FileSystemDataSetMappingOutput"], () => require("./getADLSGen2FileSystemDataSetMapping"));

export { GetADLSGen2FolderDataSetArgs, GetADLSGen2FolderDataSetResult, GetADLSGen2FolderDataSetOutputArgs } from "./getADLSGen2FolderDataSet";
export const getADLSGen2FolderDataSet: typeof import("./getADLSGen2FolderDataSet").getADLSGen2FolderDataSet = null as any;
export const getADLSGen2FolderDataSetOutput: typeof import("./getADLSGen2FolderDataSet").getADLSGen2FolderDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2FolderDataSet","getADLSGen2FolderDataSetOutput"], () => require("./getADLSGen2FolderDataSet"));

export { GetADLSGen2FolderDataSetMappingArgs, GetADLSGen2FolderDataSetMappingResult, GetADLSGen2FolderDataSetMappingOutputArgs } from "./getADLSGen2FolderDataSetMapping";
export const getADLSGen2FolderDataSetMapping: typeof import("./getADLSGen2FolderDataSetMapping").getADLSGen2FolderDataSetMapping = null as any;
export const getADLSGen2FolderDataSetMappingOutput: typeof import("./getADLSGen2FolderDataSetMapping").getADLSGen2FolderDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getADLSGen2FolderDataSetMapping","getADLSGen2FolderDataSetMappingOutput"], () => require("./getADLSGen2FolderDataSetMapping"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetBlobContainerDataSetArgs, GetBlobContainerDataSetResult, GetBlobContainerDataSetOutputArgs } from "./getBlobContainerDataSet";
export const getBlobContainerDataSet: typeof import("./getBlobContainerDataSet").getBlobContainerDataSet = null as any;
export const getBlobContainerDataSetOutput: typeof import("./getBlobContainerDataSet").getBlobContainerDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getBlobContainerDataSet","getBlobContainerDataSetOutput"], () => require("./getBlobContainerDataSet"));

export { GetBlobContainerDataSetMappingArgs, GetBlobContainerDataSetMappingResult, GetBlobContainerDataSetMappingOutputArgs } from "./getBlobContainerDataSetMapping";
export const getBlobContainerDataSetMapping: typeof import("./getBlobContainerDataSetMapping").getBlobContainerDataSetMapping = null as any;
export const getBlobContainerDataSetMappingOutput: typeof import("./getBlobContainerDataSetMapping").getBlobContainerDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getBlobContainerDataSetMapping","getBlobContainerDataSetMappingOutput"], () => require("./getBlobContainerDataSetMapping"));

export { GetBlobDataSetArgs, GetBlobDataSetResult, GetBlobDataSetOutputArgs } from "./getBlobDataSet";
export const getBlobDataSet: typeof import("./getBlobDataSet").getBlobDataSet = null as any;
export const getBlobDataSetOutput: typeof import("./getBlobDataSet").getBlobDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getBlobDataSet","getBlobDataSetOutput"], () => require("./getBlobDataSet"));

export { GetBlobDataSetMappingArgs, GetBlobDataSetMappingResult, GetBlobDataSetMappingOutputArgs } from "./getBlobDataSetMapping";
export const getBlobDataSetMapping: typeof import("./getBlobDataSetMapping").getBlobDataSetMapping = null as any;
export const getBlobDataSetMappingOutput: typeof import("./getBlobDataSetMapping").getBlobDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getBlobDataSetMapping","getBlobDataSetMappingOutput"], () => require("./getBlobDataSetMapping"));

export { GetBlobFolderDataSetArgs, GetBlobFolderDataSetResult, GetBlobFolderDataSetOutputArgs } from "./getBlobFolderDataSet";
export const getBlobFolderDataSet: typeof import("./getBlobFolderDataSet").getBlobFolderDataSet = null as any;
export const getBlobFolderDataSetOutput: typeof import("./getBlobFolderDataSet").getBlobFolderDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getBlobFolderDataSet","getBlobFolderDataSetOutput"], () => require("./getBlobFolderDataSet"));

export { GetBlobFolderDataSetMappingArgs, GetBlobFolderDataSetMappingResult, GetBlobFolderDataSetMappingOutputArgs } from "./getBlobFolderDataSetMapping";
export const getBlobFolderDataSetMapping: typeof import("./getBlobFolderDataSetMapping").getBlobFolderDataSetMapping = null as any;
export const getBlobFolderDataSetMappingOutput: typeof import("./getBlobFolderDataSetMapping").getBlobFolderDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getBlobFolderDataSetMapping","getBlobFolderDataSetMappingOutput"], () => require("./getBlobFolderDataSetMapping"));

export { GetInvitationArgs, GetInvitationResult, GetInvitationOutputArgs } from "./getInvitation";
export const getInvitation: typeof import("./getInvitation").getInvitation = null as any;
export const getInvitationOutput: typeof import("./getInvitation").getInvitationOutput = null as any;
utilities.lazyLoad(exports, ["getInvitation","getInvitationOutput"], () => require("./getInvitation"));

export { GetKustoClusterDataSetArgs, GetKustoClusterDataSetResult, GetKustoClusterDataSetOutputArgs } from "./getKustoClusterDataSet";
export const getKustoClusterDataSet: typeof import("./getKustoClusterDataSet").getKustoClusterDataSet = null as any;
export const getKustoClusterDataSetOutput: typeof import("./getKustoClusterDataSet").getKustoClusterDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getKustoClusterDataSet","getKustoClusterDataSetOutput"], () => require("./getKustoClusterDataSet"));

export { GetKustoClusterDataSetMappingArgs, GetKustoClusterDataSetMappingResult, GetKustoClusterDataSetMappingOutputArgs } from "./getKustoClusterDataSetMapping";
export const getKustoClusterDataSetMapping: typeof import("./getKustoClusterDataSetMapping").getKustoClusterDataSetMapping = null as any;
export const getKustoClusterDataSetMappingOutput: typeof import("./getKustoClusterDataSetMapping").getKustoClusterDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getKustoClusterDataSetMapping","getKustoClusterDataSetMappingOutput"], () => require("./getKustoClusterDataSetMapping"));

export { GetKustoDatabaseDataSetArgs, GetKustoDatabaseDataSetResult, GetKustoDatabaseDataSetOutputArgs } from "./getKustoDatabaseDataSet";
export const getKustoDatabaseDataSet: typeof import("./getKustoDatabaseDataSet").getKustoDatabaseDataSet = null as any;
export const getKustoDatabaseDataSetOutput: typeof import("./getKustoDatabaseDataSet").getKustoDatabaseDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getKustoDatabaseDataSet","getKustoDatabaseDataSetOutput"], () => require("./getKustoDatabaseDataSet"));

export { GetKustoDatabaseDataSetMappingArgs, GetKustoDatabaseDataSetMappingResult, GetKustoDatabaseDataSetMappingOutputArgs } from "./getKustoDatabaseDataSetMapping";
export const getKustoDatabaseDataSetMapping: typeof import("./getKustoDatabaseDataSetMapping").getKustoDatabaseDataSetMapping = null as any;
export const getKustoDatabaseDataSetMappingOutput: typeof import("./getKustoDatabaseDataSetMapping").getKustoDatabaseDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getKustoDatabaseDataSetMapping","getKustoDatabaseDataSetMappingOutput"], () => require("./getKustoDatabaseDataSetMapping"));

export { GetKustoTableDataSetArgs, GetKustoTableDataSetResult, GetKustoTableDataSetOutputArgs } from "./getKustoTableDataSet";
export const getKustoTableDataSet: typeof import("./getKustoTableDataSet").getKustoTableDataSet = null as any;
export const getKustoTableDataSetOutput: typeof import("./getKustoTableDataSet").getKustoTableDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getKustoTableDataSet","getKustoTableDataSetOutput"], () => require("./getKustoTableDataSet"));

export { GetKustoTableDataSetMappingArgs, GetKustoTableDataSetMappingResult, GetKustoTableDataSetMappingOutputArgs } from "./getKustoTableDataSetMapping";
export const getKustoTableDataSetMapping: typeof import("./getKustoTableDataSetMapping").getKustoTableDataSetMapping = null as any;
export const getKustoTableDataSetMappingOutput: typeof import("./getKustoTableDataSetMapping").getKustoTableDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getKustoTableDataSetMapping","getKustoTableDataSetMappingOutput"], () => require("./getKustoTableDataSetMapping"));

export { GetScheduledSynchronizationSettingArgs, GetScheduledSynchronizationSettingResult, GetScheduledSynchronizationSettingOutputArgs } from "./getScheduledSynchronizationSetting";
export const getScheduledSynchronizationSetting: typeof import("./getScheduledSynchronizationSetting").getScheduledSynchronizationSetting = null as any;
export const getScheduledSynchronizationSettingOutput: typeof import("./getScheduledSynchronizationSetting").getScheduledSynchronizationSettingOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledSynchronizationSetting","getScheduledSynchronizationSettingOutput"], () => require("./getScheduledSynchronizationSetting"));

export { GetScheduledTriggerArgs, GetScheduledTriggerResult, GetScheduledTriggerOutputArgs } from "./getScheduledTrigger";
export const getScheduledTrigger: typeof import("./getScheduledTrigger").getScheduledTrigger = null as any;
export const getScheduledTriggerOutput: typeof import("./getScheduledTrigger").getScheduledTriggerOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledTrigger","getScheduledTriggerOutput"], () => require("./getScheduledTrigger"));

export { GetShareArgs, GetShareResult, GetShareOutputArgs } from "./getShare";
export const getShare: typeof import("./getShare").getShare = null as any;
export const getShareOutput: typeof import("./getShare").getShareOutput = null as any;
utilities.lazyLoad(exports, ["getShare","getShareOutput"], () => require("./getShare"));

export { GetShareSubscriptionArgs, GetShareSubscriptionResult, GetShareSubscriptionOutputArgs } from "./getShareSubscription";
export const getShareSubscription: typeof import("./getShareSubscription").getShareSubscription = null as any;
export const getShareSubscriptionOutput: typeof import("./getShareSubscription").getShareSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getShareSubscription","getShareSubscriptionOutput"], () => require("./getShareSubscription"));

export { GetSqlDBTableDataSetArgs, GetSqlDBTableDataSetResult, GetSqlDBTableDataSetOutputArgs } from "./getSqlDBTableDataSet";
export const getSqlDBTableDataSet: typeof import("./getSqlDBTableDataSet").getSqlDBTableDataSet = null as any;
export const getSqlDBTableDataSetOutput: typeof import("./getSqlDBTableDataSet").getSqlDBTableDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getSqlDBTableDataSet","getSqlDBTableDataSetOutput"], () => require("./getSqlDBTableDataSet"));

export { GetSqlDBTableDataSetMappingArgs, GetSqlDBTableDataSetMappingResult, GetSqlDBTableDataSetMappingOutputArgs } from "./getSqlDBTableDataSetMapping";
export const getSqlDBTableDataSetMapping: typeof import("./getSqlDBTableDataSetMapping").getSqlDBTableDataSetMapping = null as any;
export const getSqlDBTableDataSetMappingOutput: typeof import("./getSqlDBTableDataSetMapping").getSqlDBTableDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getSqlDBTableDataSetMapping","getSqlDBTableDataSetMappingOutput"], () => require("./getSqlDBTableDataSetMapping"));

export { GetSqlDWTableDataSetArgs, GetSqlDWTableDataSetResult, GetSqlDWTableDataSetOutputArgs } from "./getSqlDWTableDataSet";
export const getSqlDWTableDataSet: typeof import("./getSqlDWTableDataSet").getSqlDWTableDataSet = null as any;
export const getSqlDWTableDataSetOutput: typeof import("./getSqlDWTableDataSet").getSqlDWTableDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getSqlDWTableDataSet","getSqlDWTableDataSetOutput"], () => require("./getSqlDWTableDataSet"));

export { GetSqlDWTableDataSetMappingArgs, GetSqlDWTableDataSetMappingResult, GetSqlDWTableDataSetMappingOutputArgs } from "./getSqlDWTableDataSetMapping";
export const getSqlDWTableDataSetMapping: typeof import("./getSqlDWTableDataSetMapping").getSqlDWTableDataSetMapping = null as any;
export const getSqlDWTableDataSetMappingOutput: typeof import("./getSqlDWTableDataSetMapping").getSqlDWTableDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getSqlDWTableDataSetMapping","getSqlDWTableDataSetMappingOutput"], () => require("./getSqlDWTableDataSetMapping"));

export { GetSynapseWorkspaceSqlPoolTableDataSetArgs, GetSynapseWorkspaceSqlPoolTableDataSetResult, GetSynapseWorkspaceSqlPoolTableDataSetOutputArgs } from "./getSynapseWorkspaceSqlPoolTableDataSet";
export const getSynapseWorkspaceSqlPoolTableDataSet: typeof import("./getSynapseWorkspaceSqlPoolTableDataSet").getSynapseWorkspaceSqlPoolTableDataSet = null as any;
export const getSynapseWorkspaceSqlPoolTableDataSetOutput: typeof import("./getSynapseWorkspaceSqlPoolTableDataSet").getSynapseWorkspaceSqlPoolTableDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getSynapseWorkspaceSqlPoolTableDataSet","getSynapseWorkspaceSqlPoolTableDataSetOutput"], () => require("./getSynapseWorkspaceSqlPoolTableDataSet"));

export { GetSynapseWorkspaceSqlPoolTableDataSetMappingArgs, GetSynapseWorkspaceSqlPoolTableDataSetMappingResult, GetSynapseWorkspaceSqlPoolTableDataSetMappingOutputArgs } from "./getSynapseWorkspaceSqlPoolTableDataSetMapping";
export const getSynapseWorkspaceSqlPoolTableDataSetMapping: typeof import("./getSynapseWorkspaceSqlPoolTableDataSetMapping").getSynapseWorkspaceSqlPoolTableDataSetMapping = null as any;
export const getSynapseWorkspaceSqlPoolTableDataSetMappingOutput: typeof import("./getSynapseWorkspaceSqlPoolTableDataSetMapping").getSynapseWorkspaceSqlPoolTableDataSetMappingOutput = null as any;
utilities.lazyLoad(exports, ["getSynapseWorkspaceSqlPoolTableDataSetMapping","getSynapseWorkspaceSqlPoolTableDataSetMappingOutput"], () => require("./getSynapseWorkspaceSqlPoolTableDataSetMapping"));

export { InvitationArgs } from "./invitation";
export type Invitation = import("./invitation").Invitation;
export const Invitation: typeof import("./invitation").Invitation = null as any;
utilities.lazyLoad(exports, ["Invitation"], () => require("./invitation"));

export { KustoClusterDataSetArgs } from "./kustoClusterDataSet";
export type KustoClusterDataSet = import("./kustoClusterDataSet").KustoClusterDataSet;
export const KustoClusterDataSet: typeof import("./kustoClusterDataSet").KustoClusterDataSet = null as any;
utilities.lazyLoad(exports, ["KustoClusterDataSet"], () => require("./kustoClusterDataSet"));

export { KustoClusterDataSetMappingArgs } from "./kustoClusterDataSetMapping";
export type KustoClusterDataSetMapping = import("./kustoClusterDataSetMapping").KustoClusterDataSetMapping;
export const KustoClusterDataSetMapping: typeof import("./kustoClusterDataSetMapping").KustoClusterDataSetMapping = null as any;
utilities.lazyLoad(exports, ["KustoClusterDataSetMapping"], () => require("./kustoClusterDataSetMapping"));

export { KustoDatabaseDataSetArgs } from "./kustoDatabaseDataSet";
export type KustoDatabaseDataSet = import("./kustoDatabaseDataSet").KustoDatabaseDataSet;
export const KustoDatabaseDataSet: typeof import("./kustoDatabaseDataSet").KustoDatabaseDataSet = null as any;
utilities.lazyLoad(exports, ["KustoDatabaseDataSet"], () => require("./kustoDatabaseDataSet"));

export { KustoDatabaseDataSetMappingArgs } from "./kustoDatabaseDataSetMapping";
export type KustoDatabaseDataSetMapping = import("./kustoDatabaseDataSetMapping").KustoDatabaseDataSetMapping;
export const KustoDatabaseDataSetMapping: typeof import("./kustoDatabaseDataSetMapping").KustoDatabaseDataSetMapping = null as any;
utilities.lazyLoad(exports, ["KustoDatabaseDataSetMapping"], () => require("./kustoDatabaseDataSetMapping"));

export { KustoTableDataSetArgs } from "./kustoTableDataSet";
export type KustoTableDataSet = import("./kustoTableDataSet").KustoTableDataSet;
export const KustoTableDataSet: typeof import("./kustoTableDataSet").KustoTableDataSet = null as any;
utilities.lazyLoad(exports, ["KustoTableDataSet"], () => require("./kustoTableDataSet"));

export { KustoTableDataSetMappingArgs } from "./kustoTableDataSetMapping";
export type KustoTableDataSetMapping = import("./kustoTableDataSetMapping").KustoTableDataSetMapping;
export const KustoTableDataSetMapping: typeof import("./kustoTableDataSetMapping").KustoTableDataSetMapping = null as any;
utilities.lazyLoad(exports, ["KustoTableDataSetMapping"], () => require("./kustoTableDataSetMapping"));

export { ListShareSubscriptionSourceShareSynchronizationSettingsArgs, ListShareSubscriptionSourceShareSynchronizationSettingsResult, ListShareSubscriptionSourceShareSynchronizationSettingsOutputArgs } from "./listShareSubscriptionSourceShareSynchronizationSettings";
export const listShareSubscriptionSourceShareSynchronizationSettings: typeof import("./listShareSubscriptionSourceShareSynchronizationSettings").listShareSubscriptionSourceShareSynchronizationSettings = null as any;
export const listShareSubscriptionSourceShareSynchronizationSettingsOutput: typeof import("./listShareSubscriptionSourceShareSynchronizationSettings").listShareSubscriptionSourceShareSynchronizationSettingsOutput = null as any;
utilities.lazyLoad(exports, ["listShareSubscriptionSourceShareSynchronizationSettings","listShareSubscriptionSourceShareSynchronizationSettingsOutput"], () => require("./listShareSubscriptionSourceShareSynchronizationSettings"));

export { ListShareSubscriptionSynchronizationDetailsArgs, ListShareSubscriptionSynchronizationDetailsResult, ListShareSubscriptionSynchronizationDetailsOutputArgs } from "./listShareSubscriptionSynchronizationDetails";
export const listShareSubscriptionSynchronizationDetails: typeof import("./listShareSubscriptionSynchronizationDetails").listShareSubscriptionSynchronizationDetails = null as any;
export const listShareSubscriptionSynchronizationDetailsOutput: typeof import("./listShareSubscriptionSynchronizationDetails").listShareSubscriptionSynchronizationDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listShareSubscriptionSynchronizationDetails","listShareSubscriptionSynchronizationDetailsOutput"], () => require("./listShareSubscriptionSynchronizationDetails"));

export { ListShareSubscriptionSynchronizationsArgs, ListShareSubscriptionSynchronizationsResult, ListShareSubscriptionSynchronizationsOutputArgs } from "./listShareSubscriptionSynchronizations";
export const listShareSubscriptionSynchronizations: typeof import("./listShareSubscriptionSynchronizations").listShareSubscriptionSynchronizations = null as any;
export const listShareSubscriptionSynchronizationsOutput: typeof import("./listShareSubscriptionSynchronizations").listShareSubscriptionSynchronizationsOutput = null as any;
utilities.lazyLoad(exports, ["listShareSubscriptionSynchronizations","listShareSubscriptionSynchronizationsOutput"], () => require("./listShareSubscriptionSynchronizations"));

export { ListShareSynchronizationDetailsArgs, ListShareSynchronizationDetailsResult, ListShareSynchronizationDetailsOutputArgs } from "./listShareSynchronizationDetails";
export const listShareSynchronizationDetails: typeof import("./listShareSynchronizationDetails").listShareSynchronizationDetails = null as any;
export const listShareSynchronizationDetailsOutput: typeof import("./listShareSynchronizationDetails").listShareSynchronizationDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listShareSynchronizationDetails","listShareSynchronizationDetailsOutput"], () => require("./listShareSynchronizationDetails"));

export { ListShareSynchronizationsArgs, ListShareSynchronizationsResult, ListShareSynchronizationsOutputArgs } from "./listShareSynchronizations";
export const listShareSynchronizations: typeof import("./listShareSynchronizations").listShareSynchronizations = null as any;
export const listShareSynchronizationsOutput: typeof import("./listShareSynchronizations").listShareSynchronizationsOutput = null as any;
utilities.lazyLoad(exports, ["listShareSynchronizations","listShareSynchronizationsOutput"], () => require("./listShareSynchronizations"));

export { ScheduledSynchronizationSettingArgs } from "./scheduledSynchronizationSetting";
export type ScheduledSynchronizationSetting = import("./scheduledSynchronizationSetting").ScheduledSynchronizationSetting;
export const ScheduledSynchronizationSetting: typeof import("./scheduledSynchronizationSetting").ScheduledSynchronizationSetting = null as any;
utilities.lazyLoad(exports, ["ScheduledSynchronizationSetting"], () => require("./scheduledSynchronizationSetting"));

export { ScheduledTriggerArgs } from "./scheduledTrigger";
export type ScheduledTrigger = import("./scheduledTrigger").ScheduledTrigger;
export const ScheduledTrigger: typeof import("./scheduledTrigger").ScheduledTrigger = null as any;
utilities.lazyLoad(exports, ["ScheduledTrigger"], () => require("./scheduledTrigger"));

export { ShareArgs } from "./share";
export type Share = import("./share").Share;
export const Share: typeof import("./share").Share = null as any;
utilities.lazyLoad(exports, ["Share"], () => require("./share"));

export { ShareSubscriptionArgs } from "./shareSubscription";
export type ShareSubscription = import("./shareSubscription").ShareSubscription;
export const ShareSubscription: typeof import("./shareSubscription").ShareSubscription = null as any;
utilities.lazyLoad(exports, ["ShareSubscription"], () => require("./shareSubscription"));

export { SqlDBTableDataSetArgs } from "./sqlDBTableDataSet";
export type SqlDBTableDataSet = import("./sqlDBTableDataSet").SqlDBTableDataSet;
export const SqlDBTableDataSet: typeof import("./sqlDBTableDataSet").SqlDBTableDataSet = null as any;
utilities.lazyLoad(exports, ["SqlDBTableDataSet"], () => require("./sqlDBTableDataSet"));

export { SqlDBTableDataSetMappingArgs } from "./sqlDBTableDataSetMapping";
export type SqlDBTableDataSetMapping = import("./sqlDBTableDataSetMapping").SqlDBTableDataSetMapping;
export const SqlDBTableDataSetMapping: typeof import("./sqlDBTableDataSetMapping").SqlDBTableDataSetMapping = null as any;
utilities.lazyLoad(exports, ["SqlDBTableDataSetMapping"], () => require("./sqlDBTableDataSetMapping"));

export { SqlDWTableDataSetArgs } from "./sqlDWTableDataSet";
export type SqlDWTableDataSet = import("./sqlDWTableDataSet").SqlDWTableDataSet;
export const SqlDWTableDataSet: typeof import("./sqlDWTableDataSet").SqlDWTableDataSet = null as any;
utilities.lazyLoad(exports, ["SqlDWTableDataSet"], () => require("./sqlDWTableDataSet"));

export { SqlDWTableDataSetMappingArgs } from "./sqlDWTableDataSetMapping";
export type SqlDWTableDataSetMapping = import("./sqlDWTableDataSetMapping").SqlDWTableDataSetMapping;
export const SqlDWTableDataSetMapping: typeof import("./sqlDWTableDataSetMapping").SqlDWTableDataSetMapping = null as any;
utilities.lazyLoad(exports, ["SqlDWTableDataSetMapping"], () => require("./sqlDWTableDataSetMapping"));

export { SynapseWorkspaceSqlPoolTableDataSetArgs } from "./synapseWorkspaceSqlPoolTableDataSet";
export type SynapseWorkspaceSqlPoolTableDataSet = import("./synapseWorkspaceSqlPoolTableDataSet").SynapseWorkspaceSqlPoolTableDataSet;
export const SynapseWorkspaceSqlPoolTableDataSet: typeof import("./synapseWorkspaceSqlPoolTableDataSet").SynapseWorkspaceSqlPoolTableDataSet = null as any;
utilities.lazyLoad(exports, ["SynapseWorkspaceSqlPoolTableDataSet"], () => require("./synapseWorkspaceSqlPoolTableDataSet"));

export { SynapseWorkspaceSqlPoolTableDataSetMappingArgs } from "./synapseWorkspaceSqlPoolTableDataSetMapping";
export type SynapseWorkspaceSqlPoolTableDataSetMapping = import("./synapseWorkspaceSqlPoolTableDataSetMapping").SynapseWorkspaceSqlPoolTableDataSetMapping;
export const SynapseWorkspaceSqlPoolTableDataSetMapping: typeof import("./synapseWorkspaceSqlPoolTableDataSetMapping").SynapseWorkspaceSqlPoolTableDataSetMapping = null as any;
utilities.lazyLoad(exports, ["SynapseWorkspaceSqlPoolTableDataSetMapping"], () => require("./synapseWorkspaceSqlPoolTableDataSetMapping"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datashare/v20210801:ADLSGen1FileDataSet":
                return new ADLSGen1FileDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ADLSGen1FolderDataSet":
                return new ADLSGen1FolderDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ADLSGen2FileDataSet":
                return new ADLSGen2FileDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ADLSGen2FileDataSetMapping":
                return new ADLSGen2FileDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ADLSGen2FileSystemDataSet":
                return new ADLSGen2FileSystemDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ADLSGen2FileSystemDataSetMapping":
                return new ADLSGen2FileSystemDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ADLSGen2FolderDataSet":
                return new ADLSGen2FolderDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ADLSGen2FolderDataSetMapping":
                return new ADLSGen2FolderDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:BlobContainerDataSet":
                return new BlobContainerDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:BlobContainerDataSetMapping":
                return new BlobContainerDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:BlobDataSet":
                return new BlobDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:BlobDataSetMapping":
                return new BlobDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:BlobFolderDataSet":
                return new BlobFolderDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:BlobFolderDataSetMapping":
                return new BlobFolderDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:Invitation":
                return new Invitation(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:KustoClusterDataSet":
                return new KustoClusterDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:KustoClusterDataSetMapping":
                return new KustoClusterDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:KustoDatabaseDataSet":
                return new KustoDatabaseDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:KustoDatabaseDataSetMapping":
                return new KustoDatabaseDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:KustoTableDataSet":
                return new KustoTableDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:KustoTableDataSetMapping":
                return new KustoTableDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ScheduledSynchronizationSetting":
                return new ScheduledSynchronizationSetting(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ScheduledTrigger":
                return new ScheduledTrigger(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:Share":
                return new Share(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:ShareSubscription":
                return new ShareSubscription(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:SqlDBTableDataSet":
                return new SqlDBTableDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:SqlDBTableDataSetMapping":
                return new SqlDBTableDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:SqlDWTableDataSet":
                return new SqlDWTableDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:SqlDWTableDataSetMapping":
                return new SqlDWTableDataSetMapping(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:SynapseWorkspaceSqlPoolTableDataSet":
                return new SynapseWorkspaceSqlPoolTableDataSet(name, <any>undefined, { urn })
            case "azure-native:datashare/v20210801:SynapseWorkspaceSqlPoolTableDataSetMapping":
                return new SynapseWorkspaceSqlPoolTableDataSetMapping(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datashare/v20210801", _module)