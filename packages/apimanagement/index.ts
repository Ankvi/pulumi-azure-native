import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiArgs } from "./api";
export type Api = import("./api").Api;
export const Api: typeof import("./api").Api = null as any;
utilities.lazyLoad(exports, ["Api"], () => require("./api"));

export { ApiDiagnosticArgs } from "./apiDiagnostic";
export type ApiDiagnostic = import("./apiDiagnostic").ApiDiagnostic;
export const ApiDiagnostic: typeof import("./apiDiagnostic").ApiDiagnostic = null as any;
utilities.lazyLoad(exports, ["ApiDiagnostic"], () => require("./apiDiagnostic"));

export { ApiGatewayArgs } from "./apiGateway";
export type ApiGateway = import("./apiGateway").ApiGateway;
export const ApiGateway: typeof import("./apiGateway").ApiGateway = null as any;
utilities.lazyLoad(exports, ["ApiGateway"], () => require("./apiGateway"));

export { ApiGatewayConfigConnectionArgs } from "./apiGatewayConfigConnection";
export type ApiGatewayConfigConnection = import("./apiGatewayConfigConnection").ApiGatewayConfigConnection;
export const ApiGatewayConfigConnection: typeof import("./apiGatewayConfigConnection").ApiGatewayConfigConnection = null as any;
utilities.lazyLoad(exports, ["ApiGatewayConfigConnection"], () => require("./apiGatewayConfigConnection"));

export { ApiIssueArgs } from "./apiIssue";
export type ApiIssue = import("./apiIssue").ApiIssue;
export const ApiIssue: typeof import("./apiIssue").ApiIssue = null as any;
utilities.lazyLoad(exports, ["ApiIssue"], () => require("./apiIssue"));

export { ApiIssueAttachmentArgs } from "./apiIssueAttachment";
export type ApiIssueAttachment = import("./apiIssueAttachment").ApiIssueAttachment;
export const ApiIssueAttachment: typeof import("./apiIssueAttachment").ApiIssueAttachment = null as any;
utilities.lazyLoad(exports, ["ApiIssueAttachment"], () => require("./apiIssueAttachment"));

export { ApiIssueCommentArgs } from "./apiIssueComment";
export type ApiIssueComment = import("./apiIssueComment").ApiIssueComment;
export const ApiIssueComment: typeof import("./apiIssueComment").ApiIssueComment = null as any;
utilities.lazyLoad(exports, ["ApiIssueComment"], () => require("./apiIssueComment"));

export { ApiManagementServiceArgs } from "./apiManagementService";
export type ApiManagementService = import("./apiManagementService").ApiManagementService;
export const ApiManagementService: typeof import("./apiManagementService").ApiManagementService = null as any;
utilities.lazyLoad(exports, ["ApiManagementService"], () => require("./apiManagementService"));

export { ApiOperationArgs } from "./apiOperation";
export type ApiOperation = import("./apiOperation").ApiOperation;
export const ApiOperation: typeof import("./apiOperation").ApiOperation = null as any;
utilities.lazyLoad(exports, ["ApiOperation"], () => require("./apiOperation"));

export { ApiOperationPolicyArgs } from "./apiOperationPolicy";
export type ApiOperationPolicy = import("./apiOperationPolicy").ApiOperationPolicy;
export const ApiOperationPolicy: typeof import("./apiOperationPolicy").ApiOperationPolicy = null as any;
utilities.lazyLoad(exports, ["ApiOperationPolicy"], () => require("./apiOperationPolicy"));

export { ApiPolicyArgs } from "./apiPolicy";
export type ApiPolicy = import("./apiPolicy").ApiPolicy;
export const ApiPolicy: typeof import("./apiPolicy").ApiPolicy = null as any;
utilities.lazyLoad(exports, ["ApiPolicy"], () => require("./apiPolicy"));

export { ApiReleaseArgs } from "./apiRelease";
export type ApiRelease = import("./apiRelease").ApiRelease;
export const ApiRelease: typeof import("./apiRelease").ApiRelease = null as any;
utilities.lazyLoad(exports, ["ApiRelease"], () => require("./apiRelease"));

export { ApiSchemaArgs } from "./apiSchema";
export type ApiSchema = import("./apiSchema").ApiSchema;
export const ApiSchema: typeof import("./apiSchema").ApiSchema = null as any;
utilities.lazyLoad(exports, ["ApiSchema"], () => require("./apiSchema"));

export { ApiTagDescriptionArgs } from "./apiTagDescription";
export type ApiTagDescription = import("./apiTagDescription").ApiTagDescription;
export const ApiTagDescription: typeof import("./apiTagDescription").ApiTagDescription = null as any;
utilities.lazyLoad(exports, ["ApiTagDescription"], () => require("./apiTagDescription"));

export { ApiVersionSetArgs } from "./apiVersionSet";
export type ApiVersionSet = import("./apiVersionSet").ApiVersionSet;
export const ApiVersionSet: typeof import("./apiVersionSet").ApiVersionSet = null as any;
utilities.lazyLoad(exports, ["ApiVersionSet"], () => require("./apiVersionSet"));

export { ApiWikiArgs } from "./apiWiki";
export type ApiWiki = import("./apiWiki").ApiWiki;
export const ApiWiki: typeof import("./apiWiki").ApiWiki = null as any;
utilities.lazyLoad(exports, ["ApiWiki"], () => require("./apiWiki"));

export { AuthorizationArgs } from "./authorization";
export type Authorization = import("./authorization").Authorization;
export const Authorization: typeof import("./authorization").Authorization = null as any;
utilities.lazyLoad(exports, ["Authorization"], () => require("./authorization"));

export { AuthorizationAccessPolicyArgs } from "./authorizationAccessPolicy";
export type AuthorizationAccessPolicy = import("./authorizationAccessPolicy").AuthorizationAccessPolicy;
export const AuthorizationAccessPolicy: typeof import("./authorizationAccessPolicy").AuthorizationAccessPolicy = null as any;
utilities.lazyLoad(exports, ["AuthorizationAccessPolicy"], () => require("./authorizationAccessPolicy"));

export { AuthorizationProviderArgs } from "./authorizationProvider";
export type AuthorizationProvider = import("./authorizationProvider").AuthorizationProvider;
export const AuthorizationProvider: typeof import("./authorizationProvider").AuthorizationProvider = null as any;
utilities.lazyLoad(exports, ["AuthorizationProvider"], () => require("./authorizationProvider"));

export { AuthorizationServerArgs } from "./authorizationServer";
export type AuthorizationServer = import("./authorizationServer").AuthorizationServer;
export const AuthorizationServer: typeof import("./authorizationServer").AuthorizationServer = null as any;
utilities.lazyLoad(exports, ["AuthorizationServer"], () => require("./authorizationServer"));

export { BackendArgs } from "./backend";
export type Backend = import("./backend").Backend;
export const Backend: typeof import("./backend").Backend = null as any;
utilities.lazyLoad(exports, ["Backend"], () => require("./backend"));

export { CacheArgs } from "./cache";
export type Cache = import("./cache").Cache;
export const Cache: typeof import("./cache").Cache = null as any;
utilities.lazyLoad(exports, ["Cache"], () => require("./cache"));

export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { ContentItemArgs } from "./contentItem";
export type ContentItem = import("./contentItem").ContentItem;
export const ContentItem: typeof import("./contentItem").ContentItem = null as any;
utilities.lazyLoad(exports, ["ContentItem"], () => require("./contentItem"));

export { ContentTypeArgs } from "./contentType";
export type ContentType = import("./contentType").ContentType;
export const ContentType: typeof import("./contentType").ContentType = null as any;
utilities.lazyLoad(exports, ["ContentType"], () => require("./contentType"));

export { DiagnosticArgs } from "./diagnostic";
export type Diagnostic = import("./diagnostic").Diagnostic;
export const Diagnostic: typeof import("./diagnostic").Diagnostic = null as any;
utilities.lazyLoad(exports, ["Diagnostic"], () => require("./diagnostic"));

export { DocumentationArgs } from "./documentation";
export type Documentation = import("./documentation").Documentation;
export const Documentation: typeof import("./documentation").Documentation = null as any;
utilities.lazyLoad(exports, ["Documentation"], () => require("./documentation"));

export { EmailTemplateArgs } from "./emailTemplate";
export type EmailTemplate = import("./emailTemplate").EmailTemplate;
export const EmailTemplate: typeof import("./emailTemplate").EmailTemplate = null as any;
utilities.lazyLoad(exports, ["EmailTemplate"], () => require("./emailTemplate"));

export { GatewayArgs } from "./gateway";
export type Gateway = import("./gateway").Gateway;
export const Gateway: typeof import("./gateway").Gateway = null as any;
utilities.lazyLoad(exports, ["Gateway"], () => require("./gateway"));

export { GatewayApiEntityTagArgs } from "./gatewayApiEntityTag";
export type GatewayApiEntityTag = import("./gatewayApiEntityTag").GatewayApiEntityTag;
export const GatewayApiEntityTag: typeof import("./gatewayApiEntityTag").GatewayApiEntityTag = null as any;
utilities.lazyLoad(exports, ["GatewayApiEntityTag"], () => require("./gatewayApiEntityTag"));

export { GatewayCertificateAuthorityArgs } from "./gatewayCertificateAuthority";
export type GatewayCertificateAuthority = import("./gatewayCertificateAuthority").GatewayCertificateAuthority;
export const GatewayCertificateAuthority: typeof import("./gatewayCertificateAuthority").GatewayCertificateAuthority = null as any;
utilities.lazyLoad(exports, ["GatewayCertificateAuthority"], () => require("./gatewayCertificateAuthority"));

export { GatewayHostnameConfigurationArgs } from "./gatewayHostnameConfiguration";
export type GatewayHostnameConfiguration = import("./gatewayHostnameConfiguration").GatewayHostnameConfiguration;
export const GatewayHostnameConfiguration: typeof import("./gatewayHostnameConfiguration").GatewayHostnameConfiguration = null as any;
utilities.lazyLoad(exports, ["GatewayHostnameConfiguration"], () => require("./gatewayHostnameConfiguration"));

export { GetApiArgs, GetApiResult, GetApiOutputArgs } from "./getApi";
export const getApi: typeof import("./getApi").getApi = null as any;
export const getApiOutput: typeof import("./getApi").getApiOutput = null as any;
utilities.lazyLoad(exports, ["getApi","getApiOutput"], () => require("./getApi"));

export { GetApiDiagnosticArgs, GetApiDiagnosticResult, GetApiDiagnosticOutputArgs } from "./getApiDiagnostic";
export const getApiDiagnostic: typeof import("./getApiDiagnostic").getApiDiagnostic = null as any;
export const getApiDiagnosticOutput: typeof import("./getApiDiagnostic").getApiDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getApiDiagnostic","getApiDiagnosticOutput"], () => require("./getApiDiagnostic"));

export { GetApiGatewayArgs, GetApiGatewayResult, GetApiGatewayOutputArgs } from "./getApiGateway";
export const getApiGateway: typeof import("./getApiGateway").getApiGateway = null as any;
export const getApiGatewayOutput: typeof import("./getApiGateway").getApiGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getApiGateway","getApiGatewayOutput"], () => require("./getApiGateway"));

export { GetApiGatewayConfigConnectionArgs, GetApiGatewayConfigConnectionResult, GetApiGatewayConfigConnectionOutputArgs } from "./getApiGatewayConfigConnection";
export const getApiGatewayConfigConnection: typeof import("./getApiGatewayConfigConnection").getApiGatewayConfigConnection = null as any;
export const getApiGatewayConfigConnectionOutput: typeof import("./getApiGatewayConfigConnection").getApiGatewayConfigConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getApiGatewayConfigConnection","getApiGatewayConfigConnectionOutput"], () => require("./getApiGatewayConfigConnection"));

export { GetApiIssueArgs, GetApiIssueResult, GetApiIssueOutputArgs } from "./getApiIssue";
export const getApiIssue: typeof import("./getApiIssue").getApiIssue = null as any;
export const getApiIssueOutput: typeof import("./getApiIssue").getApiIssueOutput = null as any;
utilities.lazyLoad(exports, ["getApiIssue","getApiIssueOutput"], () => require("./getApiIssue"));

export { GetApiIssueAttachmentArgs, GetApiIssueAttachmentResult, GetApiIssueAttachmentOutputArgs } from "./getApiIssueAttachment";
export const getApiIssueAttachment: typeof import("./getApiIssueAttachment").getApiIssueAttachment = null as any;
export const getApiIssueAttachmentOutput: typeof import("./getApiIssueAttachment").getApiIssueAttachmentOutput = null as any;
utilities.lazyLoad(exports, ["getApiIssueAttachment","getApiIssueAttachmentOutput"], () => require("./getApiIssueAttachment"));

export { GetApiIssueCommentArgs, GetApiIssueCommentResult, GetApiIssueCommentOutputArgs } from "./getApiIssueComment";
export const getApiIssueComment: typeof import("./getApiIssueComment").getApiIssueComment = null as any;
export const getApiIssueCommentOutput: typeof import("./getApiIssueComment").getApiIssueCommentOutput = null as any;
utilities.lazyLoad(exports, ["getApiIssueComment","getApiIssueCommentOutput"], () => require("./getApiIssueComment"));

export { GetApiManagementServiceArgs, GetApiManagementServiceResult, GetApiManagementServiceOutputArgs } from "./getApiManagementService";
export const getApiManagementService: typeof import("./getApiManagementService").getApiManagementService = null as any;
export const getApiManagementServiceOutput: typeof import("./getApiManagementService").getApiManagementServiceOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementService","getApiManagementServiceOutput"], () => require("./getApiManagementService"));

export { GetApiManagementServiceDomainOwnershipIdentifierArgs, GetApiManagementServiceDomainOwnershipIdentifierResult } from "./getApiManagementServiceDomainOwnershipIdentifier";
export const getApiManagementServiceDomainOwnershipIdentifier: typeof import("./getApiManagementServiceDomainOwnershipIdentifier").getApiManagementServiceDomainOwnershipIdentifier = null as any;
export const getApiManagementServiceDomainOwnershipIdentifierOutput: typeof import("./getApiManagementServiceDomainOwnershipIdentifier").getApiManagementServiceDomainOwnershipIdentifierOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementServiceDomainOwnershipIdentifier","getApiManagementServiceDomainOwnershipIdentifierOutput"], () => require("./getApiManagementServiceDomainOwnershipIdentifier"));

export { GetApiManagementServiceSsoTokenArgs, GetApiManagementServiceSsoTokenResult, GetApiManagementServiceSsoTokenOutputArgs } from "./getApiManagementServiceSsoToken";
export const getApiManagementServiceSsoToken: typeof import("./getApiManagementServiceSsoToken").getApiManagementServiceSsoToken = null as any;
export const getApiManagementServiceSsoTokenOutput: typeof import("./getApiManagementServiceSsoToken").getApiManagementServiceSsoTokenOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementServiceSsoToken","getApiManagementServiceSsoTokenOutput"], () => require("./getApiManagementServiceSsoToken"));

export { GetApiOperationArgs, GetApiOperationResult, GetApiOperationOutputArgs } from "./getApiOperation";
export const getApiOperation: typeof import("./getApiOperation").getApiOperation = null as any;
export const getApiOperationOutput: typeof import("./getApiOperation").getApiOperationOutput = null as any;
utilities.lazyLoad(exports, ["getApiOperation","getApiOperationOutput"], () => require("./getApiOperation"));

export { GetApiOperationPolicyArgs, GetApiOperationPolicyResult, GetApiOperationPolicyOutputArgs } from "./getApiOperationPolicy";
export const getApiOperationPolicy: typeof import("./getApiOperationPolicy").getApiOperationPolicy = null as any;
export const getApiOperationPolicyOutput: typeof import("./getApiOperationPolicy").getApiOperationPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getApiOperationPolicy","getApiOperationPolicyOutput"], () => require("./getApiOperationPolicy"));

export { GetApiPolicyArgs, GetApiPolicyResult, GetApiPolicyOutputArgs } from "./getApiPolicy";
export const getApiPolicy: typeof import("./getApiPolicy").getApiPolicy = null as any;
export const getApiPolicyOutput: typeof import("./getApiPolicy").getApiPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getApiPolicy","getApiPolicyOutput"], () => require("./getApiPolicy"));

export { GetApiReleaseArgs, GetApiReleaseResult, GetApiReleaseOutputArgs } from "./getApiRelease";
export const getApiRelease: typeof import("./getApiRelease").getApiRelease = null as any;
export const getApiReleaseOutput: typeof import("./getApiRelease").getApiReleaseOutput = null as any;
utilities.lazyLoad(exports, ["getApiRelease","getApiReleaseOutput"], () => require("./getApiRelease"));

export { GetApiSchemaArgs, GetApiSchemaResult, GetApiSchemaOutputArgs } from "./getApiSchema";
export const getApiSchema: typeof import("./getApiSchema").getApiSchema = null as any;
export const getApiSchemaOutput: typeof import("./getApiSchema").getApiSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getApiSchema","getApiSchemaOutput"], () => require("./getApiSchema"));

export { GetApiTagDescriptionArgs, GetApiTagDescriptionResult, GetApiTagDescriptionOutputArgs } from "./getApiTagDescription";
export const getApiTagDescription: typeof import("./getApiTagDescription").getApiTagDescription = null as any;
export const getApiTagDescriptionOutput: typeof import("./getApiTagDescription").getApiTagDescriptionOutput = null as any;
utilities.lazyLoad(exports, ["getApiTagDescription","getApiTagDescriptionOutput"], () => require("./getApiTagDescription"));

export { GetApiVersionSetArgs, GetApiVersionSetResult, GetApiVersionSetOutputArgs } from "./getApiVersionSet";
export const getApiVersionSet: typeof import("./getApiVersionSet").getApiVersionSet = null as any;
export const getApiVersionSetOutput: typeof import("./getApiVersionSet").getApiVersionSetOutput = null as any;
utilities.lazyLoad(exports, ["getApiVersionSet","getApiVersionSetOutput"], () => require("./getApiVersionSet"));

export { GetApiWikiArgs, GetApiWikiResult, GetApiWikiOutputArgs } from "./getApiWiki";
export const getApiWiki: typeof import("./getApiWiki").getApiWiki = null as any;
export const getApiWikiOutput: typeof import("./getApiWiki").getApiWikiOutput = null as any;
utilities.lazyLoad(exports, ["getApiWiki","getApiWikiOutput"], () => require("./getApiWiki"));

export { GetAuthorizationArgs, GetAuthorizationResult, GetAuthorizationOutputArgs } from "./getAuthorization";
export const getAuthorization: typeof import("./getAuthorization").getAuthorization = null as any;
export const getAuthorizationOutput: typeof import("./getAuthorization").getAuthorizationOutput = null as any;
utilities.lazyLoad(exports, ["getAuthorization","getAuthorizationOutput"], () => require("./getAuthorization"));

export { GetAuthorizationAccessPolicyArgs, GetAuthorizationAccessPolicyResult, GetAuthorizationAccessPolicyOutputArgs } from "./getAuthorizationAccessPolicy";
export const getAuthorizationAccessPolicy: typeof import("./getAuthorizationAccessPolicy").getAuthorizationAccessPolicy = null as any;
export const getAuthorizationAccessPolicyOutput: typeof import("./getAuthorizationAccessPolicy").getAuthorizationAccessPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getAuthorizationAccessPolicy","getAuthorizationAccessPolicyOutput"], () => require("./getAuthorizationAccessPolicy"));

export { GetAuthorizationLoginLinkPostArgs, GetAuthorizationLoginLinkPostResult, GetAuthorizationLoginLinkPostOutputArgs } from "./getAuthorizationLoginLinkPost";
export const getAuthorizationLoginLinkPost: typeof import("./getAuthorizationLoginLinkPost").getAuthorizationLoginLinkPost = null as any;
export const getAuthorizationLoginLinkPostOutput: typeof import("./getAuthorizationLoginLinkPost").getAuthorizationLoginLinkPostOutput = null as any;
utilities.lazyLoad(exports, ["getAuthorizationLoginLinkPost","getAuthorizationLoginLinkPostOutput"], () => require("./getAuthorizationLoginLinkPost"));

export { GetAuthorizationProviderArgs, GetAuthorizationProviderResult, GetAuthorizationProviderOutputArgs } from "./getAuthorizationProvider";
export const getAuthorizationProvider: typeof import("./getAuthorizationProvider").getAuthorizationProvider = null as any;
export const getAuthorizationProviderOutput: typeof import("./getAuthorizationProvider").getAuthorizationProviderOutput = null as any;
utilities.lazyLoad(exports, ["getAuthorizationProvider","getAuthorizationProviderOutput"], () => require("./getAuthorizationProvider"));

export { GetAuthorizationServerArgs, GetAuthorizationServerResult, GetAuthorizationServerOutputArgs } from "./getAuthorizationServer";
export const getAuthorizationServer: typeof import("./getAuthorizationServer").getAuthorizationServer = null as any;
export const getAuthorizationServerOutput: typeof import("./getAuthorizationServer").getAuthorizationServerOutput = null as any;
utilities.lazyLoad(exports, ["getAuthorizationServer","getAuthorizationServerOutput"], () => require("./getAuthorizationServer"));

export { GetBackendArgs, GetBackendResult, GetBackendOutputArgs } from "./getBackend";
export const getBackend: typeof import("./getBackend").getBackend = null as any;
export const getBackendOutput: typeof import("./getBackend").getBackendOutput = null as any;
utilities.lazyLoad(exports, ["getBackend","getBackendOutput"], () => require("./getBackend"));

export { GetCacheArgs, GetCacheResult, GetCacheOutputArgs } from "./getCache";
export const getCache: typeof import("./getCache").getCache = null as any;
export const getCacheOutput: typeof import("./getCache").getCacheOutput = null as any;
utilities.lazyLoad(exports, ["getCache","getCacheOutput"], () => require("./getCache"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetContentItemArgs, GetContentItemResult, GetContentItemOutputArgs } from "./getContentItem";
export const getContentItem: typeof import("./getContentItem").getContentItem = null as any;
export const getContentItemOutput: typeof import("./getContentItem").getContentItemOutput = null as any;
utilities.lazyLoad(exports, ["getContentItem","getContentItemOutput"], () => require("./getContentItem"));

export { GetContentTypeArgs, GetContentTypeResult, GetContentTypeOutputArgs } from "./getContentType";
export const getContentType: typeof import("./getContentType").getContentType = null as any;
export const getContentTypeOutput: typeof import("./getContentType").getContentTypeOutput = null as any;
utilities.lazyLoad(exports, ["getContentType","getContentTypeOutput"], () => require("./getContentType"));

export { GetDiagnosticArgs, GetDiagnosticResult, GetDiagnosticOutputArgs } from "./getDiagnostic";
export const getDiagnostic: typeof import("./getDiagnostic").getDiagnostic = null as any;
export const getDiagnosticOutput: typeof import("./getDiagnostic").getDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnostic","getDiagnosticOutput"], () => require("./getDiagnostic"));

export { GetDocumentationArgs, GetDocumentationResult, GetDocumentationOutputArgs } from "./getDocumentation";
export const getDocumentation: typeof import("./getDocumentation").getDocumentation = null as any;
export const getDocumentationOutput: typeof import("./getDocumentation").getDocumentationOutput = null as any;
utilities.lazyLoad(exports, ["getDocumentation","getDocumentationOutput"], () => require("./getDocumentation"));

export { GetEmailTemplateArgs, GetEmailTemplateResult, GetEmailTemplateOutputArgs } from "./getEmailTemplate";
export const getEmailTemplate: typeof import("./getEmailTemplate").getEmailTemplate = null as any;
export const getEmailTemplateOutput: typeof import("./getEmailTemplate").getEmailTemplateOutput = null as any;
utilities.lazyLoad(exports, ["getEmailTemplate","getEmailTemplateOutput"], () => require("./getEmailTemplate"));

export { GetGatewayArgs, GetGatewayResult, GetGatewayOutputArgs } from "./getGateway";
export const getGateway: typeof import("./getGateway").getGateway = null as any;
export const getGatewayOutput: typeof import("./getGateway").getGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getGateway","getGatewayOutput"], () => require("./getGateway"));

export { GetGatewayCertificateAuthorityArgs, GetGatewayCertificateAuthorityResult, GetGatewayCertificateAuthorityOutputArgs } from "./getGatewayCertificateAuthority";
export const getGatewayCertificateAuthority: typeof import("./getGatewayCertificateAuthority").getGatewayCertificateAuthority = null as any;
export const getGatewayCertificateAuthorityOutput: typeof import("./getGatewayCertificateAuthority").getGatewayCertificateAuthorityOutput = null as any;
utilities.lazyLoad(exports, ["getGatewayCertificateAuthority","getGatewayCertificateAuthorityOutput"], () => require("./getGatewayCertificateAuthority"));

export { GetGatewayHostnameConfigurationArgs, GetGatewayHostnameConfigurationResult, GetGatewayHostnameConfigurationOutputArgs } from "./getGatewayHostnameConfiguration";
export const getGatewayHostnameConfiguration: typeof import("./getGatewayHostnameConfiguration").getGatewayHostnameConfiguration = null as any;
export const getGatewayHostnameConfigurationOutput: typeof import("./getGatewayHostnameConfiguration").getGatewayHostnameConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getGatewayHostnameConfiguration","getGatewayHostnameConfigurationOutput"], () => require("./getGatewayHostnameConfiguration"));

export { GetGlobalSchemaArgs, GetGlobalSchemaResult, GetGlobalSchemaOutputArgs } from "./getGlobalSchema";
export const getGlobalSchema: typeof import("./getGlobalSchema").getGlobalSchema = null as any;
export const getGlobalSchemaOutput: typeof import("./getGlobalSchema").getGlobalSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalSchema","getGlobalSchemaOutput"], () => require("./getGlobalSchema"));

export { GetGraphQLApiResolverArgs, GetGraphQLApiResolverResult, GetGraphQLApiResolverOutputArgs } from "./getGraphQLApiResolver";
export const getGraphQLApiResolver: typeof import("./getGraphQLApiResolver").getGraphQLApiResolver = null as any;
export const getGraphQLApiResolverOutput: typeof import("./getGraphQLApiResolver").getGraphQLApiResolverOutput = null as any;
utilities.lazyLoad(exports, ["getGraphQLApiResolver","getGraphQLApiResolverOutput"], () => require("./getGraphQLApiResolver"));

export { GetGraphQLApiResolverPolicyArgs, GetGraphQLApiResolverPolicyResult, GetGraphQLApiResolverPolicyOutputArgs } from "./getGraphQLApiResolverPolicy";
export const getGraphQLApiResolverPolicy: typeof import("./getGraphQLApiResolverPolicy").getGraphQLApiResolverPolicy = null as any;
export const getGraphQLApiResolverPolicyOutput: typeof import("./getGraphQLApiResolverPolicy").getGraphQLApiResolverPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getGraphQLApiResolverPolicy","getGraphQLApiResolverPolicyOutput"], () => require("./getGraphQLApiResolverPolicy"));

export { GetGroupArgs, GetGroupResult, GetGroupOutputArgs } from "./getGroup";
export const getGroup: typeof import("./getGroup").getGroup = null as any;
export const getGroupOutput: typeof import("./getGroup").getGroupOutput = null as any;
utilities.lazyLoad(exports, ["getGroup","getGroupOutput"], () => require("./getGroup"));

export { GetIdentityProviderArgs, GetIdentityProviderResult, GetIdentityProviderOutputArgs } from "./getIdentityProvider";
export const getIdentityProvider: typeof import("./getIdentityProvider").getIdentityProvider = null as any;
export const getIdentityProviderOutput: typeof import("./getIdentityProvider").getIdentityProviderOutput = null as any;
utilities.lazyLoad(exports, ["getIdentityProvider","getIdentityProviderOutput"], () => require("./getIdentityProvider"));

export { GetLoggerArgs, GetLoggerResult, GetLoggerOutputArgs } from "./getLogger";
export const getLogger: typeof import("./getLogger").getLogger = null as any;
export const getLoggerOutput: typeof import("./getLogger").getLoggerOutput = null as any;
utilities.lazyLoad(exports, ["getLogger","getLoggerOutput"], () => require("./getLogger"));

export { GetNamedValueArgs, GetNamedValueResult, GetNamedValueOutputArgs } from "./getNamedValue";
export const getNamedValue: typeof import("./getNamedValue").getNamedValue = null as any;
export const getNamedValueOutput: typeof import("./getNamedValue").getNamedValueOutput = null as any;
utilities.lazyLoad(exports, ["getNamedValue","getNamedValueOutput"], () => require("./getNamedValue"));

export { GetOpenIdConnectProviderArgs, GetOpenIdConnectProviderResult, GetOpenIdConnectProviderOutputArgs } from "./getOpenIdConnectProvider";
export const getOpenIdConnectProvider: typeof import("./getOpenIdConnectProvider").getOpenIdConnectProvider = null as any;
export const getOpenIdConnectProviderOutput: typeof import("./getOpenIdConnectProvider").getOpenIdConnectProviderOutput = null as any;
utilities.lazyLoad(exports, ["getOpenIdConnectProvider","getOpenIdConnectProviderOutput"], () => require("./getOpenIdConnectProvider"));

export { GetPolicyArgs, GetPolicyResult, GetPolicyOutputArgs } from "./getPolicy";
export const getPolicy: typeof import("./getPolicy").getPolicy = null as any;
export const getPolicyOutput: typeof import("./getPolicy").getPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPolicy","getPolicyOutput"], () => require("./getPolicy"));

export { GetPolicyFragmentArgs, GetPolicyFragmentResult, GetPolicyFragmentOutputArgs } from "./getPolicyFragment";
export const getPolicyFragment: typeof import("./getPolicyFragment").getPolicyFragment = null as any;
export const getPolicyFragmentOutput: typeof import("./getPolicyFragment").getPolicyFragmentOutput = null as any;
utilities.lazyLoad(exports, ["getPolicyFragment","getPolicyFragmentOutput"], () => require("./getPolicyFragment"));

export { GetPolicyRestrictionArgs, GetPolicyRestrictionResult, GetPolicyRestrictionOutputArgs } from "./getPolicyRestriction";
export const getPolicyRestriction: typeof import("./getPolicyRestriction").getPolicyRestriction = null as any;
export const getPolicyRestrictionOutput: typeof import("./getPolicyRestriction").getPolicyRestrictionOutput = null as any;
utilities.lazyLoad(exports, ["getPolicyRestriction","getPolicyRestrictionOutput"], () => require("./getPolicyRestriction"));

export { GetPrivateEndpointConnectionByNameArgs, GetPrivateEndpointConnectionByNameResult, GetPrivateEndpointConnectionByNameOutputArgs } from "./getPrivateEndpointConnectionByName";
export const getPrivateEndpointConnectionByName: typeof import("./getPrivateEndpointConnectionByName").getPrivateEndpointConnectionByName = null as any;
export const getPrivateEndpointConnectionByNameOutput: typeof import("./getPrivateEndpointConnectionByName").getPrivateEndpointConnectionByNameOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnectionByName","getPrivateEndpointConnectionByNameOutput"], () => require("./getPrivateEndpointConnectionByName"));

export { GetProductArgs, GetProductResult, GetProductOutputArgs } from "./getProduct";
export const getProduct: typeof import("./getProduct").getProduct = null as any;
export const getProductOutput: typeof import("./getProduct").getProductOutput = null as any;
utilities.lazyLoad(exports, ["getProduct","getProductOutput"], () => require("./getProduct"));

export { GetProductApiLinkArgs, GetProductApiLinkResult, GetProductApiLinkOutputArgs } from "./getProductApiLink";
export const getProductApiLink: typeof import("./getProductApiLink").getProductApiLink = null as any;
export const getProductApiLinkOutput: typeof import("./getProductApiLink").getProductApiLinkOutput = null as any;
utilities.lazyLoad(exports, ["getProductApiLink","getProductApiLinkOutput"], () => require("./getProductApiLink"));

export { GetProductGroupLinkArgs, GetProductGroupLinkResult, GetProductGroupLinkOutputArgs } from "./getProductGroupLink";
export const getProductGroupLink: typeof import("./getProductGroupLink").getProductGroupLink = null as any;
export const getProductGroupLinkOutput: typeof import("./getProductGroupLink").getProductGroupLinkOutput = null as any;
utilities.lazyLoad(exports, ["getProductGroupLink","getProductGroupLinkOutput"], () => require("./getProductGroupLink"));

export { GetProductPolicyArgs, GetProductPolicyResult, GetProductPolicyOutputArgs } from "./getProductPolicy";
export const getProductPolicy: typeof import("./getProductPolicy").getProductPolicy = null as any;
export const getProductPolicyOutput: typeof import("./getProductPolicy").getProductPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getProductPolicy","getProductPolicyOutput"], () => require("./getProductPolicy"));

export { GetProductWikiArgs, GetProductWikiResult, GetProductWikiOutputArgs } from "./getProductWiki";
export const getProductWiki: typeof import("./getProductWiki").getProductWiki = null as any;
export const getProductWikiOutput: typeof import("./getProductWiki").getProductWikiOutput = null as any;
utilities.lazyLoad(exports, ["getProductWiki","getProductWikiOutput"], () => require("./getProductWiki"));

export { GetSchemaArgs, GetSchemaResult, GetSchemaOutputArgs } from "./getSchema";
export const getSchema: typeof import("./getSchema").getSchema = null as any;
export const getSchemaOutput: typeof import("./getSchema").getSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getSchema","getSchemaOutput"], () => require("./getSchema"));

export { GetSubscriptionArgs, GetSubscriptionResult, GetSubscriptionOutputArgs } from "./getSubscription";
export const getSubscription: typeof import("./getSubscription").getSubscription = null as any;
export const getSubscriptionOutput: typeof import("./getSubscription").getSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getSubscription","getSubscriptionOutput"], () => require("./getSubscription"));

export { GetTagArgs, GetTagResult, GetTagOutputArgs } from "./getTag";
export const getTag: typeof import("./getTag").getTag = null as any;
export const getTagOutput: typeof import("./getTag").getTagOutput = null as any;
utilities.lazyLoad(exports, ["getTag","getTagOutput"], () => require("./getTag"));

export { GetTagApiLinkArgs, GetTagApiLinkResult, GetTagApiLinkOutputArgs } from "./getTagApiLink";
export const getTagApiLink: typeof import("./getTagApiLink").getTagApiLink = null as any;
export const getTagApiLinkOutput: typeof import("./getTagApiLink").getTagApiLinkOutput = null as any;
utilities.lazyLoad(exports, ["getTagApiLink","getTagApiLinkOutput"], () => require("./getTagApiLink"));

export { GetTagByApiArgs, GetTagByApiResult, GetTagByApiOutputArgs } from "./getTagByApi";
export const getTagByApi: typeof import("./getTagByApi").getTagByApi = null as any;
export const getTagByApiOutput: typeof import("./getTagByApi").getTagByApiOutput = null as any;
utilities.lazyLoad(exports, ["getTagByApi","getTagByApiOutput"], () => require("./getTagByApi"));

export { GetTagByOperationArgs, GetTagByOperationResult, GetTagByOperationOutputArgs } from "./getTagByOperation";
export const getTagByOperation: typeof import("./getTagByOperation").getTagByOperation = null as any;
export const getTagByOperationOutput: typeof import("./getTagByOperation").getTagByOperationOutput = null as any;
utilities.lazyLoad(exports, ["getTagByOperation","getTagByOperationOutput"], () => require("./getTagByOperation"));

export { GetTagByProductArgs, GetTagByProductResult, GetTagByProductOutputArgs } from "./getTagByProduct";
export const getTagByProduct: typeof import("./getTagByProduct").getTagByProduct = null as any;
export const getTagByProductOutput: typeof import("./getTagByProduct").getTagByProductOutput = null as any;
utilities.lazyLoad(exports, ["getTagByProduct","getTagByProductOutput"], () => require("./getTagByProduct"));

export { GetTagOperationLinkArgs, GetTagOperationLinkResult, GetTagOperationLinkOutputArgs } from "./getTagOperationLink";
export const getTagOperationLink: typeof import("./getTagOperationLink").getTagOperationLink = null as any;
export const getTagOperationLinkOutput: typeof import("./getTagOperationLink").getTagOperationLinkOutput = null as any;
utilities.lazyLoad(exports, ["getTagOperationLink","getTagOperationLinkOutput"], () => require("./getTagOperationLink"));

export { GetTagProductLinkArgs, GetTagProductLinkResult, GetTagProductLinkOutputArgs } from "./getTagProductLink";
export const getTagProductLink: typeof import("./getTagProductLink").getTagProductLink = null as any;
export const getTagProductLinkOutput: typeof import("./getTagProductLink").getTagProductLinkOutput = null as any;
utilities.lazyLoad(exports, ["getTagProductLink","getTagProductLinkOutput"], () => require("./getTagProductLink"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { GetUserSharedAccessTokenArgs, GetUserSharedAccessTokenResult, GetUserSharedAccessTokenOutputArgs } from "./getUserSharedAccessToken";
export const getUserSharedAccessToken: typeof import("./getUserSharedAccessToken").getUserSharedAccessToken = null as any;
export const getUserSharedAccessTokenOutput: typeof import("./getUserSharedAccessToken").getUserSharedAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["getUserSharedAccessToken","getUserSharedAccessTokenOutput"], () => require("./getUserSharedAccessToken"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { GetWorkspaceApiArgs, GetWorkspaceApiResult, GetWorkspaceApiOutputArgs } from "./getWorkspaceApi";
export const getWorkspaceApi: typeof import("./getWorkspaceApi").getWorkspaceApi = null as any;
export const getWorkspaceApiOutput: typeof import("./getWorkspaceApi").getWorkspaceApiOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApi","getWorkspaceApiOutput"], () => require("./getWorkspaceApi"));

export { GetWorkspaceApiDiagnosticArgs, GetWorkspaceApiDiagnosticResult, GetWorkspaceApiDiagnosticOutputArgs } from "./getWorkspaceApiDiagnostic";
export const getWorkspaceApiDiagnostic: typeof import("./getWorkspaceApiDiagnostic").getWorkspaceApiDiagnostic = null as any;
export const getWorkspaceApiDiagnosticOutput: typeof import("./getWorkspaceApiDiagnostic").getWorkspaceApiDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApiDiagnostic","getWorkspaceApiDiagnosticOutput"], () => require("./getWorkspaceApiDiagnostic"));

export { GetWorkspaceApiOperationArgs, GetWorkspaceApiOperationResult, GetWorkspaceApiOperationOutputArgs } from "./getWorkspaceApiOperation";
export const getWorkspaceApiOperation: typeof import("./getWorkspaceApiOperation").getWorkspaceApiOperation = null as any;
export const getWorkspaceApiOperationOutput: typeof import("./getWorkspaceApiOperation").getWorkspaceApiOperationOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApiOperation","getWorkspaceApiOperationOutput"], () => require("./getWorkspaceApiOperation"));

export { GetWorkspaceApiOperationPolicyArgs, GetWorkspaceApiOperationPolicyResult, GetWorkspaceApiOperationPolicyOutputArgs } from "./getWorkspaceApiOperationPolicy";
export const getWorkspaceApiOperationPolicy: typeof import("./getWorkspaceApiOperationPolicy").getWorkspaceApiOperationPolicy = null as any;
export const getWorkspaceApiOperationPolicyOutput: typeof import("./getWorkspaceApiOperationPolicy").getWorkspaceApiOperationPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApiOperationPolicy","getWorkspaceApiOperationPolicyOutput"], () => require("./getWorkspaceApiOperationPolicy"));

export { GetWorkspaceApiPolicyArgs, GetWorkspaceApiPolicyResult, GetWorkspaceApiPolicyOutputArgs } from "./getWorkspaceApiPolicy";
export const getWorkspaceApiPolicy: typeof import("./getWorkspaceApiPolicy").getWorkspaceApiPolicy = null as any;
export const getWorkspaceApiPolicyOutput: typeof import("./getWorkspaceApiPolicy").getWorkspaceApiPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApiPolicy","getWorkspaceApiPolicyOutput"], () => require("./getWorkspaceApiPolicy"));

export { GetWorkspaceApiReleaseArgs, GetWorkspaceApiReleaseResult, GetWorkspaceApiReleaseOutputArgs } from "./getWorkspaceApiRelease";
export const getWorkspaceApiRelease: typeof import("./getWorkspaceApiRelease").getWorkspaceApiRelease = null as any;
export const getWorkspaceApiReleaseOutput: typeof import("./getWorkspaceApiRelease").getWorkspaceApiReleaseOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApiRelease","getWorkspaceApiReleaseOutput"], () => require("./getWorkspaceApiRelease"));

export { GetWorkspaceApiSchemaArgs, GetWorkspaceApiSchemaResult, GetWorkspaceApiSchemaOutputArgs } from "./getWorkspaceApiSchema";
export const getWorkspaceApiSchema: typeof import("./getWorkspaceApiSchema").getWorkspaceApiSchema = null as any;
export const getWorkspaceApiSchemaOutput: typeof import("./getWorkspaceApiSchema").getWorkspaceApiSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApiSchema","getWorkspaceApiSchemaOutput"], () => require("./getWorkspaceApiSchema"));

export { GetWorkspaceApiVersionSetArgs, GetWorkspaceApiVersionSetResult, GetWorkspaceApiVersionSetOutputArgs } from "./getWorkspaceApiVersionSet";
export const getWorkspaceApiVersionSet: typeof import("./getWorkspaceApiVersionSet").getWorkspaceApiVersionSet = null as any;
export const getWorkspaceApiVersionSetOutput: typeof import("./getWorkspaceApiVersionSet").getWorkspaceApiVersionSetOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceApiVersionSet","getWorkspaceApiVersionSetOutput"], () => require("./getWorkspaceApiVersionSet"));

export { GetWorkspaceBackendArgs, GetWorkspaceBackendResult, GetWorkspaceBackendOutputArgs } from "./getWorkspaceBackend";
export const getWorkspaceBackend: typeof import("./getWorkspaceBackend").getWorkspaceBackend = null as any;
export const getWorkspaceBackendOutput: typeof import("./getWorkspaceBackend").getWorkspaceBackendOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceBackend","getWorkspaceBackendOutput"], () => require("./getWorkspaceBackend"));

export { GetWorkspaceCertificateArgs, GetWorkspaceCertificateResult, GetWorkspaceCertificateOutputArgs } from "./getWorkspaceCertificate";
export const getWorkspaceCertificate: typeof import("./getWorkspaceCertificate").getWorkspaceCertificate = null as any;
export const getWorkspaceCertificateOutput: typeof import("./getWorkspaceCertificate").getWorkspaceCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceCertificate","getWorkspaceCertificateOutput"], () => require("./getWorkspaceCertificate"));

export { GetWorkspaceDiagnosticArgs, GetWorkspaceDiagnosticResult, GetWorkspaceDiagnosticOutputArgs } from "./getWorkspaceDiagnostic";
export const getWorkspaceDiagnostic: typeof import("./getWorkspaceDiagnostic").getWorkspaceDiagnostic = null as any;
export const getWorkspaceDiagnosticOutput: typeof import("./getWorkspaceDiagnostic").getWorkspaceDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceDiagnostic","getWorkspaceDiagnosticOutput"], () => require("./getWorkspaceDiagnostic"));

export { GetWorkspaceGlobalSchemaArgs, GetWorkspaceGlobalSchemaResult, GetWorkspaceGlobalSchemaOutputArgs } from "./getWorkspaceGlobalSchema";
export const getWorkspaceGlobalSchema: typeof import("./getWorkspaceGlobalSchema").getWorkspaceGlobalSchema = null as any;
export const getWorkspaceGlobalSchemaOutput: typeof import("./getWorkspaceGlobalSchema").getWorkspaceGlobalSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceGlobalSchema","getWorkspaceGlobalSchemaOutput"], () => require("./getWorkspaceGlobalSchema"));

export { GetWorkspaceGroupArgs, GetWorkspaceGroupResult, GetWorkspaceGroupOutputArgs } from "./getWorkspaceGroup";
export const getWorkspaceGroup: typeof import("./getWorkspaceGroup").getWorkspaceGroup = null as any;
export const getWorkspaceGroupOutput: typeof import("./getWorkspaceGroup").getWorkspaceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceGroup","getWorkspaceGroupOutput"], () => require("./getWorkspaceGroup"));

export { GetWorkspaceLoggerArgs, GetWorkspaceLoggerResult, GetWorkspaceLoggerOutputArgs } from "./getWorkspaceLogger";
export const getWorkspaceLogger: typeof import("./getWorkspaceLogger").getWorkspaceLogger = null as any;
export const getWorkspaceLoggerOutput: typeof import("./getWorkspaceLogger").getWorkspaceLoggerOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceLogger","getWorkspaceLoggerOutput"], () => require("./getWorkspaceLogger"));

export { GetWorkspaceNamedValueArgs, GetWorkspaceNamedValueResult, GetWorkspaceNamedValueOutputArgs } from "./getWorkspaceNamedValue";
export const getWorkspaceNamedValue: typeof import("./getWorkspaceNamedValue").getWorkspaceNamedValue = null as any;
export const getWorkspaceNamedValueOutput: typeof import("./getWorkspaceNamedValue").getWorkspaceNamedValueOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceNamedValue","getWorkspaceNamedValueOutput"], () => require("./getWorkspaceNamedValue"));

export { GetWorkspacePolicyArgs, GetWorkspacePolicyResult, GetWorkspacePolicyOutputArgs } from "./getWorkspacePolicy";
export const getWorkspacePolicy: typeof import("./getWorkspacePolicy").getWorkspacePolicy = null as any;
export const getWorkspacePolicyOutput: typeof import("./getWorkspacePolicy").getWorkspacePolicyOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspacePolicy","getWorkspacePolicyOutput"], () => require("./getWorkspacePolicy"));

export { GetWorkspacePolicyFragmentArgs, GetWorkspacePolicyFragmentResult, GetWorkspacePolicyFragmentOutputArgs } from "./getWorkspacePolicyFragment";
export const getWorkspacePolicyFragment: typeof import("./getWorkspacePolicyFragment").getWorkspacePolicyFragment = null as any;
export const getWorkspacePolicyFragmentOutput: typeof import("./getWorkspacePolicyFragment").getWorkspacePolicyFragmentOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspacePolicyFragment","getWorkspacePolicyFragmentOutput"], () => require("./getWorkspacePolicyFragment"));

export { GetWorkspaceProductArgs, GetWorkspaceProductResult, GetWorkspaceProductOutputArgs } from "./getWorkspaceProduct";
export const getWorkspaceProduct: typeof import("./getWorkspaceProduct").getWorkspaceProduct = null as any;
export const getWorkspaceProductOutput: typeof import("./getWorkspaceProduct").getWorkspaceProductOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceProduct","getWorkspaceProductOutput"], () => require("./getWorkspaceProduct"));

export { GetWorkspaceProductApiLinkArgs, GetWorkspaceProductApiLinkResult, GetWorkspaceProductApiLinkOutputArgs } from "./getWorkspaceProductApiLink";
export const getWorkspaceProductApiLink: typeof import("./getWorkspaceProductApiLink").getWorkspaceProductApiLink = null as any;
export const getWorkspaceProductApiLinkOutput: typeof import("./getWorkspaceProductApiLink").getWorkspaceProductApiLinkOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceProductApiLink","getWorkspaceProductApiLinkOutput"], () => require("./getWorkspaceProductApiLink"));

export { GetWorkspaceProductGroupLinkArgs, GetWorkspaceProductGroupLinkResult, GetWorkspaceProductGroupLinkOutputArgs } from "./getWorkspaceProductGroupLink";
export const getWorkspaceProductGroupLink: typeof import("./getWorkspaceProductGroupLink").getWorkspaceProductGroupLink = null as any;
export const getWorkspaceProductGroupLinkOutput: typeof import("./getWorkspaceProductGroupLink").getWorkspaceProductGroupLinkOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceProductGroupLink","getWorkspaceProductGroupLinkOutput"], () => require("./getWorkspaceProductGroupLink"));

export { GetWorkspaceProductPolicyArgs, GetWorkspaceProductPolicyResult, GetWorkspaceProductPolicyOutputArgs } from "./getWorkspaceProductPolicy";
export const getWorkspaceProductPolicy: typeof import("./getWorkspaceProductPolicy").getWorkspaceProductPolicy = null as any;
export const getWorkspaceProductPolicyOutput: typeof import("./getWorkspaceProductPolicy").getWorkspaceProductPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceProductPolicy","getWorkspaceProductPolicyOutput"], () => require("./getWorkspaceProductPolicy"));

export { GetWorkspaceSubscriptionArgs, GetWorkspaceSubscriptionResult, GetWorkspaceSubscriptionOutputArgs } from "./getWorkspaceSubscription";
export const getWorkspaceSubscription: typeof import("./getWorkspaceSubscription").getWorkspaceSubscription = null as any;
export const getWorkspaceSubscriptionOutput: typeof import("./getWorkspaceSubscription").getWorkspaceSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceSubscription","getWorkspaceSubscriptionOutput"], () => require("./getWorkspaceSubscription"));

export { GetWorkspaceTagArgs, GetWorkspaceTagResult, GetWorkspaceTagOutputArgs } from "./getWorkspaceTag";
export const getWorkspaceTag: typeof import("./getWorkspaceTag").getWorkspaceTag = null as any;
export const getWorkspaceTagOutput: typeof import("./getWorkspaceTag").getWorkspaceTagOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceTag","getWorkspaceTagOutput"], () => require("./getWorkspaceTag"));

export { GetWorkspaceTagApiLinkArgs, GetWorkspaceTagApiLinkResult, GetWorkspaceTagApiLinkOutputArgs } from "./getWorkspaceTagApiLink";
export const getWorkspaceTagApiLink: typeof import("./getWorkspaceTagApiLink").getWorkspaceTagApiLink = null as any;
export const getWorkspaceTagApiLinkOutput: typeof import("./getWorkspaceTagApiLink").getWorkspaceTagApiLinkOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceTagApiLink","getWorkspaceTagApiLinkOutput"], () => require("./getWorkspaceTagApiLink"));

export { GetWorkspaceTagOperationLinkArgs, GetWorkspaceTagOperationLinkResult, GetWorkspaceTagOperationLinkOutputArgs } from "./getWorkspaceTagOperationLink";
export const getWorkspaceTagOperationLink: typeof import("./getWorkspaceTagOperationLink").getWorkspaceTagOperationLink = null as any;
export const getWorkspaceTagOperationLinkOutput: typeof import("./getWorkspaceTagOperationLink").getWorkspaceTagOperationLinkOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceTagOperationLink","getWorkspaceTagOperationLinkOutput"], () => require("./getWorkspaceTagOperationLink"));

export { GetWorkspaceTagProductLinkArgs, GetWorkspaceTagProductLinkResult, GetWorkspaceTagProductLinkOutputArgs } from "./getWorkspaceTagProductLink";
export const getWorkspaceTagProductLink: typeof import("./getWorkspaceTagProductLink").getWorkspaceTagProductLink = null as any;
export const getWorkspaceTagProductLinkOutput: typeof import("./getWorkspaceTagProductLink").getWorkspaceTagProductLinkOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceTagProductLink","getWorkspaceTagProductLinkOutput"], () => require("./getWorkspaceTagProductLink"));

export { GlobalSchemaArgs } from "./globalSchema";
export type GlobalSchema = import("./globalSchema").GlobalSchema;
export const GlobalSchema: typeof import("./globalSchema").GlobalSchema = null as any;
utilities.lazyLoad(exports, ["GlobalSchema"], () => require("./globalSchema"));

export { GraphQLApiResolverArgs } from "./graphQLApiResolver";
export type GraphQLApiResolver = import("./graphQLApiResolver").GraphQLApiResolver;
export const GraphQLApiResolver: typeof import("./graphQLApiResolver").GraphQLApiResolver = null as any;
utilities.lazyLoad(exports, ["GraphQLApiResolver"], () => require("./graphQLApiResolver"));

export { GraphQLApiResolverPolicyArgs } from "./graphQLApiResolverPolicy";
export type GraphQLApiResolverPolicy = import("./graphQLApiResolverPolicy").GraphQLApiResolverPolicy;
export const GraphQLApiResolverPolicy: typeof import("./graphQLApiResolverPolicy").GraphQLApiResolverPolicy = null as any;
utilities.lazyLoad(exports, ["GraphQLApiResolverPolicy"], () => require("./graphQLApiResolverPolicy"));

export { GroupArgs } from "./group";
export type Group = import("./group").Group;
export const Group: typeof import("./group").Group = null as any;
utilities.lazyLoad(exports, ["Group"], () => require("./group"));

export { GroupUserArgs } from "./groupUser";
export type GroupUser = import("./groupUser").GroupUser;
export const GroupUser: typeof import("./groupUser").GroupUser = null as any;
utilities.lazyLoad(exports, ["GroupUser"], () => require("./groupUser"));

export { IdentityProviderArgs } from "./identityProvider";
export type IdentityProvider = import("./identityProvider").IdentityProvider;
export const IdentityProvider: typeof import("./identityProvider").IdentityProvider = null as any;
utilities.lazyLoad(exports, ["IdentityProvider"], () => require("./identityProvider"));

export { ListAuthorizationServerSecretsArgs, ListAuthorizationServerSecretsResult, ListAuthorizationServerSecretsOutputArgs } from "./listAuthorizationServerSecrets";
export const listAuthorizationServerSecrets: typeof import("./listAuthorizationServerSecrets").listAuthorizationServerSecrets = null as any;
export const listAuthorizationServerSecretsOutput: typeof import("./listAuthorizationServerSecrets").listAuthorizationServerSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listAuthorizationServerSecrets","listAuthorizationServerSecretsOutput"], () => require("./listAuthorizationServerSecrets"));

export { ListDelegationSettingSecretsArgs, ListDelegationSettingSecretsResult, ListDelegationSettingSecretsOutputArgs } from "./listDelegationSettingSecrets";
export const listDelegationSettingSecrets: typeof import("./listDelegationSettingSecrets").listDelegationSettingSecrets = null as any;
export const listDelegationSettingSecretsOutput: typeof import("./listDelegationSettingSecrets").listDelegationSettingSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listDelegationSettingSecrets","listDelegationSettingSecretsOutput"], () => require("./listDelegationSettingSecrets"));

export { ListGatewayDebugCredentialsArgs, ListGatewayDebugCredentialsResult, ListGatewayDebugCredentialsOutputArgs } from "./listGatewayDebugCredentials";
export const listGatewayDebugCredentials: typeof import("./listGatewayDebugCredentials").listGatewayDebugCredentials = null as any;
export const listGatewayDebugCredentialsOutput: typeof import("./listGatewayDebugCredentials").listGatewayDebugCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listGatewayDebugCredentials","listGatewayDebugCredentialsOutput"], () => require("./listGatewayDebugCredentials"));

export { ListGatewayKeysArgs, ListGatewayKeysResult, ListGatewayKeysOutputArgs } from "./listGatewayKeys";
export const listGatewayKeys: typeof import("./listGatewayKeys").listGatewayKeys = null as any;
export const listGatewayKeysOutput: typeof import("./listGatewayKeys").listGatewayKeysOutput = null as any;
utilities.lazyLoad(exports, ["listGatewayKeys","listGatewayKeysOutput"], () => require("./listGatewayKeys"));

export { ListIdentityProviderSecretsArgs, ListIdentityProviderSecretsResult, ListIdentityProviderSecretsOutputArgs } from "./listIdentityProviderSecrets";
export const listIdentityProviderSecrets: typeof import("./listIdentityProviderSecrets").listIdentityProviderSecrets = null as any;
export const listIdentityProviderSecretsOutput: typeof import("./listIdentityProviderSecrets").listIdentityProviderSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listIdentityProviderSecrets","listIdentityProviderSecretsOutput"], () => require("./listIdentityProviderSecrets"));

export { ListNamedValueArgs, ListNamedValueResult, ListNamedValueOutputArgs } from "./listNamedValue";
export const listNamedValue: typeof import("./listNamedValue").listNamedValue = null as any;
export const listNamedValueOutput: typeof import("./listNamedValue").listNamedValueOutput = null as any;
utilities.lazyLoad(exports, ["listNamedValue","listNamedValueOutput"], () => require("./listNamedValue"));

export { ListOpenIdConnectProviderSecretsArgs, ListOpenIdConnectProviderSecretsResult, ListOpenIdConnectProviderSecretsOutputArgs } from "./listOpenIdConnectProviderSecrets";
export const listOpenIdConnectProviderSecrets: typeof import("./listOpenIdConnectProviderSecrets").listOpenIdConnectProviderSecrets = null as any;
export const listOpenIdConnectProviderSecretsOutput: typeof import("./listOpenIdConnectProviderSecrets").listOpenIdConnectProviderSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listOpenIdConnectProviderSecrets","listOpenIdConnectProviderSecretsOutput"], () => require("./listOpenIdConnectProviderSecrets"));

export { ListPolicyFragmentReferencesArgs, ListPolicyFragmentReferencesResult, ListPolicyFragmentReferencesOutputArgs } from "./listPolicyFragmentReferences";
export const listPolicyFragmentReferences: typeof import("./listPolicyFragmentReferences").listPolicyFragmentReferences = null as any;
export const listPolicyFragmentReferencesOutput: typeof import("./listPolicyFragmentReferences").listPolicyFragmentReferencesOutput = null as any;
utilities.lazyLoad(exports, ["listPolicyFragmentReferences","listPolicyFragmentReferencesOutput"], () => require("./listPolicyFragmentReferences"));

export { ListSubscriptionSecretsArgs, ListSubscriptionSecretsResult, ListSubscriptionSecretsOutputArgs } from "./listSubscriptionSecrets";
export const listSubscriptionSecrets: typeof import("./listSubscriptionSecrets").listSubscriptionSecrets = null as any;
export const listSubscriptionSecretsOutput: typeof import("./listSubscriptionSecrets").listSubscriptionSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listSubscriptionSecrets","listSubscriptionSecretsOutput"], () => require("./listSubscriptionSecrets"));

export { ListTenantAccessSecretsArgs, ListTenantAccessSecretsResult, ListTenantAccessSecretsOutputArgs } from "./listTenantAccessSecrets";
export const listTenantAccessSecrets: typeof import("./listTenantAccessSecrets").listTenantAccessSecrets = null as any;
export const listTenantAccessSecretsOutput: typeof import("./listTenantAccessSecrets").listTenantAccessSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listTenantAccessSecrets","listTenantAccessSecretsOutput"], () => require("./listTenantAccessSecrets"));

export { ListWorkspaceNamedValueArgs, ListWorkspaceNamedValueResult, ListWorkspaceNamedValueOutputArgs } from "./listWorkspaceNamedValue";
export const listWorkspaceNamedValue: typeof import("./listWorkspaceNamedValue").listWorkspaceNamedValue = null as any;
export const listWorkspaceNamedValueOutput: typeof import("./listWorkspaceNamedValue").listWorkspaceNamedValueOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceNamedValue","listWorkspaceNamedValueOutput"], () => require("./listWorkspaceNamedValue"));

export { ListWorkspacePolicyFragmentReferencesArgs, ListWorkspacePolicyFragmentReferencesResult, ListWorkspacePolicyFragmentReferencesOutputArgs } from "./listWorkspacePolicyFragmentReferences";
export const listWorkspacePolicyFragmentReferences: typeof import("./listWorkspacePolicyFragmentReferences").listWorkspacePolicyFragmentReferences = null as any;
export const listWorkspacePolicyFragmentReferencesOutput: typeof import("./listWorkspacePolicyFragmentReferences").listWorkspacePolicyFragmentReferencesOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspacePolicyFragmentReferences","listWorkspacePolicyFragmentReferencesOutput"], () => require("./listWorkspacePolicyFragmentReferences"));

export { ListWorkspaceSubscriptionSecretsArgs, ListWorkspaceSubscriptionSecretsResult, ListWorkspaceSubscriptionSecretsOutputArgs } from "./listWorkspaceSubscriptionSecrets";
export const listWorkspaceSubscriptionSecrets: typeof import("./listWorkspaceSubscriptionSecrets").listWorkspaceSubscriptionSecrets = null as any;
export const listWorkspaceSubscriptionSecretsOutput: typeof import("./listWorkspaceSubscriptionSecrets").listWorkspaceSubscriptionSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceSubscriptionSecrets","listWorkspaceSubscriptionSecretsOutput"], () => require("./listWorkspaceSubscriptionSecrets"));

export { LoggerArgs } from "./logger";
export type Logger = import("./logger").Logger;
export const Logger: typeof import("./logger").Logger = null as any;
utilities.lazyLoad(exports, ["Logger"], () => require("./logger"));

export { NamedValueArgs } from "./namedValue";
export type NamedValue = import("./namedValue").NamedValue;
export const NamedValue: typeof import("./namedValue").NamedValue = null as any;
utilities.lazyLoad(exports, ["NamedValue"], () => require("./namedValue"));

export { NotificationRecipientEmailArgs } from "./notificationRecipientEmail";
export type NotificationRecipientEmail = import("./notificationRecipientEmail").NotificationRecipientEmail;
export const NotificationRecipientEmail: typeof import("./notificationRecipientEmail").NotificationRecipientEmail = null as any;
utilities.lazyLoad(exports, ["NotificationRecipientEmail"], () => require("./notificationRecipientEmail"));

export { NotificationRecipientUserArgs } from "./notificationRecipientUser";
export type NotificationRecipientUser = import("./notificationRecipientUser").NotificationRecipientUser;
export const NotificationRecipientUser: typeof import("./notificationRecipientUser").NotificationRecipientUser = null as any;
utilities.lazyLoad(exports, ["NotificationRecipientUser"], () => require("./notificationRecipientUser"));

export { OpenIdConnectProviderArgs } from "./openIdConnectProvider";
export type OpenIdConnectProvider = import("./openIdConnectProvider").OpenIdConnectProvider;
export const OpenIdConnectProvider: typeof import("./openIdConnectProvider").OpenIdConnectProvider = null as any;
utilities.lazyLoad(exports, ["OpenIdConnectProvider"], () => require("./openIdConnectProvider"));

export { PolicyArgs } from "./policy";
export type Policy = import("./policy").Policy;
export const Policy: typeof import("./policy").Policy = null as any;
utilities.lazyLoad(exports, ["Policy"], () => require("./policy"));

export { PolicyFragmentArgs } from "./policyFragment";
export type PolicyFragment = import("./policyFragment").PolicyFragment;
export const PolicyFragment: typeof import("./policyFragment").PolicyFragment = null as any;
utilities.lazyLoad(exports, ["PolicyFragment"], () => require("./policyFragment"));

export { PolicyRestrictionArgs } from "./policyRestriction";
export type PolicyRestriction = import("./policyRestriction").PolicyRestriction;
export const PolicyRestriction: typeof import("./policyRestriction").PolicyRestriction = null as any;
utilities.lazyLoad(exports, ["PolicyRestriction"], () => require("./policyRestriction"));

export { PrivateEndpointConnectionByNameArgs } from "./privateEndpointConnectionByName";
export type PrivateEndpointConnectionByName = import("./privateEndpointConnectionByName").PrivateEndpointConnectionByName;
export const PrivateEndpointConnectionByName: typeof import("./privateEndpointConnectionByName").PrivateEndpointConnectionByName = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnectionByName"], () => require("./privateEndpointConnectionByName"));

export { ProductArgs } from "./product";
export type Product = import("./product").Product;
export const Product: typeof import("./product").Product = null as any;
utilities.lazyLoad(exports, ["Product"], () => require("./product"));

export { ProductApiArgs } from "./productApi";
export type ProductApi = import("./productApi").ProductApi;
export const ProductApi: typeof import("./productApi").ProductApi = null as any;
utilities.lazyLoad(exports, ["ProductApi"], () => require("./productApi"));

export { ProductApiLinkArgs } from "./productApiLink";
export type ProductApiLink = import("./productApiLink").ProductApiLink;
export const ProductApiLink: typeof import("./productApiLink").ProductApiLink = null as any;
utilities.lazyLoad(exports, ["ProductApiLink"], () => require("./productApiLink"));

export { ProductGroupArgs } from "./productGroup";
export type ProductGroup = import("./productGroup").ProductGroup;
export const ProductGroup: typeof import("./productGroup").ProductGroup = null as any;
utilities.lazyLoad(exports, ["ProductGroup"], () => require("./productGroup"));

export { ProductGroupLinkArgs } from "./productGroupLink";
export type ProductGroupLink = import("./productGroupLink").ProductGroupLink;
export const ProductGroupLink: typeof import("./productGroupLink").ProductGroupLink = null as any;
utilities.lazyLoad(exports, ["ProductGroupLink"], () => require("./productGroupLink"));

export { ProductPolicyArgs } from "./productPolicy";
export type ProductPolicy = import("./productPolicy").ProductPolicy;
export const ProductPolicy: typeof import("./productPolicy").ProductPolicy = null as any;
utilities.lazyLoad(exports, ["ProductPolicy"], () => require("./productPolicy"));

export { ProductWikiArgs } from "./productWiki";
export type ProductWiki = import("./productWiki").ProductWiki;
export const ProductWiki: typeof import("./productWiki").ProductWiki = null as any;
utilities.lazyLoad(exports, ["ProductWiki"], () => require("./productWiki"));

export { SchemaArgs } from "./schema";
export type Schema = import("./schema").Schema;
export const Schema: typeof import("./schema").Schema = null as any;
utilities.lazyLoad(exports, ["Schema"], () => require("./schema"));

export { SubscriptionArgs } from "./subscription";
export type Subscription = import("./subscription").Subscription;
export const Subscription: typeof import("./subscription").Subscription = null as any;
utilities.lazyLoad(exports, ["Subscription"], () => require("./subscription"));

export { TagArgs } from "./tag";
export type Tag = import("./tag").Tag;
export const Tag: typeof import("./tag").Tag = null as any;
utilities.lazyLoad(exports, ["Tag"], () => require("./tag"));

export { TagApiLinkArgs } from "./tagApiLink";
export type TagApiLink = import("./tagApiLink").TagApiLink;
export const TagApiLink: typeof import("./tagApiLink").TagApiLink = null as any;
utilities.lazyLoad(exports, ["TagApiLink"], () => require("./tagApiLink"));

export { TagByApiArgs } from "./tagByApi";
export type TagByApi = import("./tagByApi").TagByApi;
export const TagByApi: typeof import("./tagByApi").TagByApi = null as any;
utilities.lazyLoad(exports, ["TagByApi"], () => require("./tagByApi"));

export { TagByOperationArgs } from "./tagByOperation";
export type TagByOperation = import("./tagByOperation").TagByOperation;
export const TagByOperation: typeof import("./tagByOperation").TagByOperation = null as any;
utilities.lazyLoad(exports, ["TagByOperation"], () => require("./tagByOperation"));

export { TagByProductArgs } from "./tagByProduct";
export type TagByProduct = import("./tagByProduct").TagByProduct;
export const TagByProduct: typeof import("./tagByProduct").TagByProduct = null as any;
utilities.lazyLoad(exports, ["TagByProduct"], () => require("./tagByProduct"));

export { TagOperationLinkArgs } from "./tagOperationLink";
export type TagOperationLink = import("./tagOperationLink").TagOperationLink;
export const TagOperationLink: typeof import("./tagOperationLink").TagOperationLink = null as any;
utilities.lazyLoad(exports, ["TagOperationLink"], () => require("./tagOperationLink"));

export { TagProductLinkArgs } from "./tagProductLink";
export type TagProductLink = import("./tagProductLink").TagProductLink;
export const TagProductLink: typeof import("./tagProductLink").TagProductLink = null as any;
utilities.lazyLoad(exports, ["TagProductLink"], () => require("./tagProductLink"));

export { UserArgs } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));

export { WorkspaceApiArgs } from "./workspaceApi";
export type WorkspaceApi = import("./workspaceApi").WorkspaceApi;
export const WorkspaceApi: typeof import("./workspaceApi").WorkspaceApi = null as any;
utilities.lazyLoad(exports, ["WorkspaceApi"], () => require("./workspaceApi"));

export { WorkspaceApiDiagnosticArgs } from "./workspaceApiDiagnostic";
export type WorkspaceApiDiagnostic = import("./workspaceApiDiagnostic").WorkspaceApiDiagnostic;
export const WorkspaceApiDiagnostic: typeof import("./workspaceApiDiagnostic").WorkspaceApiDiagnostic = null as any;
utilities.lazyLoad(exports, ["WorkspaceApiDiagnostic"], () => require("./workspaceApiDiagnostic"));

export { WorkspaceApiOperationArgs } from "./workspaceApiOperation";
export type WorkspaceApiOperation = import("./workspaceApiOperation").WorkspaceApiOperation;
export const WorkspaceApiOperation: typeof import("./workspaceApiOperation").WorkspaceApiOperation = null as any;
utilities.lazyLoad(exports, ["WorkspaceApiOperation"], () => require("./workspaceApiOperation"));

export { WorkspaceApiOperationPolicyArgs } from "./workspaceApiOperationPolicy";
export type WorkspaceApiOperationPolicy = import("./workspaceApiOperationPolicy").WorkspaceApiOperationPolicy;
export const WorkspaceApiOperationPolicy: typeof import("./workspaceApiOperationPolicy").WorkspaceApiOperationPolicy = null as any;
utilities.lazyLoad(exports, ["WorkspaceApiOperationPolicy"], () => require("./workspaceApiOperationPolicy"));

export { WorkspaceApiPolicyArgs } from "./workspaceApiPolicy";
export type WorkspaceApiPolicy = import("./workspaceApiPolicy").WorkspaceApiPolicy;
export const WorkspaceApiPolicy: typeof import("./workspaceApiPolicy").WorkspaceApiPolicy = null as any;
utilities.lazyLoad(exports, ["WorkspaceApiPolicy"], () => require("./workspaceApiPolicy"));

export { WorkspaceApiReleaseArgs } from "./workspaceApiRelease";
export type WorkspaceApiRelease = import("./workspaceApiRelease").WorkspaceApiRelease;
export const WorkspaceApiRelease: typeof import("./workspaceApiRelease").WorkspaceApiRelease = null as any;
utilities.lazyLoad(exports, ["WorkspaceApiRelease"], () => require("./workspaceApiRelease"));

export { WorkspaceApiSchemaArgs } from "./workspaceApiSchema";
export type WorkspaceApiSchema = import("./workspaceApiSchema").WorkspaceApiSchema;
export const WorkspaceApiSchema: typeof import("./workspaceApiSchema").WorkspaceApiSchema = null as any;
utilities.lazyLoad(exports, ["WorkspaceApiSchema"], () => require("./workspaceApiSchema"));

export { WorkspaceApiVersionSetArgs } from "./workspaceApiVersionSet";
export type WorkspaceApiVersionSet = import("./workspaceApiVersionSet").WorkspaceApiVersionSet;
export const WorkspaceApiVersionSet: typeof import("./workspaceApiVersionSet").WorkspaceApiVersionSet = null as any;
utilities.lazyLoad(exports, ["WorkspaceApiVersionSet"], () => require("./workspaceApiVersionSet"));

export { WorkspaceBackendArgs } from "./workspaceBackend";
export type WorkspaceBackend = import("./workspaceBackend").WorkspaceBackend;
export const WorkspaceBackend: typeof import("./workspaceBackend").WorkspaceBackend = null as any;
utilities.lazyLoad(exports, ["WorkspaceBackend"], () => require("./workspaceBackend"));

export { WorkspaceCertificateArgs } from "./workspaceCertificate";
export type WorkspaceCertificate = import("./workspaceCertificate").WorkspaceCertificate;
export const WorkspaceCertificate: typeof import("./workspaceCertificate").WorkspaceCertificate = null as any;
utilities.lazyLoad(exports, ["WorkspaceCertificate"], () => require("./workspaceCertificate"));

export { WorkspaceDiagnosticArgs } from "./workspaceDiagnostic";
export type WorkspaceDiagnostic = import("./workspaceDiagnostic").WorkspaceDiagnostic;
export const WorkspaceDiagnostic: typeof import("./workspaceDiagnostic").WorkspaceDiagnostic = null as any;
utilities.lazyLoad(exports, ["WorkspaceDiagnostic"], () => require("./workspaceDiagnostic"));

export { WorkspaceGlobalSchemaArgs } from "./workspaceGlobalSchema";
export type WorkspaceGlobalSchema = import("./workspaceGlobalSchema").WorkspaceGlobalSchema;
export const WorkspaceGlobalSchema: typeof import("./workspaceGlobalSchema").WorkspaceGlobalSchema = null as any;
utilities.lazyLoad(exports, ["WorkspaceGlobalSchema"], () => require("./workspaceGlobalSchema"));

export { WorkspaceGroupArgs } from "./workspaceGroup";
export type WorkspaceGroup = import("./workspaceGroup").WorkspaceGroup;
export const WorkspaceGroup: typeof import("./workspaceGroup").WorkspaceGroup = null as any;
utilities.lazyLoad(exports, ["WorkspaceGroup"], () => require("./workspaceGroup"));

export { WorkspaceGroupUserArgs } from "./workspaceGroupUser";
export type WorkspaceGroupUser = import("./workspaceGroupUser").WorkspaceGroupUser;
export const WorkspaceGroupUser: typeof import("./workspaceGroupUser").WorkspaceGroupUser = null as any;
utilities.lazyLoad(exports, ["WorkspaceGroupUser"], () => require("./workspaceGroupUser"));

export { WorkspaceLoggerArgs } from "./workspaceLogger";
export type WorkspaceLogger = import("./workspaceLogger").WorkspaceLogger;
export const WorkspaceLogger: typeof import("./workspaceLogger").WorkspaceLogger = null as any;
utilities.lazyLoad(exports, ["WorkspaceLogger"], () => require("./workspaceLogger"));

export { WorkspaceNamedValueArgs } from "./workspaceNamedValue";
export type WorkspaceNamedValue = import("./workspaceNamedValue").WorkspaceNamedValue;
export const WorkspaceNamedValue: typeof import("./workspaceNamedValue").WorkspaceNamedValue = null as any;
utilities.lazyLoad(exports, ["WorkspaceNamedValue"], () => require("./workspaceNamedValue"));

export { WorkspaceNotificationRecipientEmailArgs } from "./workspaceNotificationRecipientEmail";
export type WorkspaceNotificationRecipientEmail = import("./workspaceNotificationRecipientEmail").WorkspaceNotificationRecipientEmail;
export const WorkspaceNotificationRecipientEmail: typeof import("./workspaceNotificationRecipientEmail").WorkspaceNotificationRecipientEmail = null as any;
utilities.lazyLoad(exports, ["WorkspaceNotificationRecipientEmail"], () => require("./workspaceNotificationRecipientEmail"));

export { WorkspaceNotificationRecipientUserArgs } from "./workspaceNotificationRecipientUser";
export type WorkspaceNotificationRecipientUser = import("./workspaceNotificationRecipientUser").WorkspaceNotificationRecipientUser;
export const WorkspaceNotificationRecipientUser: typeof import("./workspaceNotificationRecipientUser").WorkspaceNotificationRecipientUser = null as any;
utilities.lazyLoad(exports, ["WorkspaceNotificationRecipientUser"], () => require("./workspaceNotificationRecipientUser"));

export { WorkspacePolicyArgs } from "./workspacePolicy";
export type WorkspacePolicy = import("./workspacePolicy").WorkspacePolicy;
export const WorkspacePolicy: typeof import("./workspacePolicy").WorkspacePolicy = null as any;
utilities.lazyLoad(exports, ["WorkspacePolicy"], () => require("./workspacePolicy"));

export { WorkspacePolicyFragmentArgs } from "./workspacePolicyFragment";
export type WorkspacePolicyFragment = import("./workspacePolicyFragment").WorkspacePolicyFragment;
export const WorkspacePolicyFragment: typeof import("./workspacePolicyFragment").WorkspacePolicyFragment = null as any;
utilities.lazyLoad(exports, ["WorkspacePolicyFragment"], () => require("./workspacePolicyFragment"));

export { WorkspaceProductArgs } from "./workspaceProduct";
export type WorkspaceProduct = import("./workspaceProduct").WorkspaceProduct;
export const WorkspaceProduct: typeof import("./workspaceProduct").WorkspaceProduct = null as any;
utilities.lazyLoad(exports, ["WorkspaceProduct"], () => require("./workspaceProduct"));

export { WorkspaceProductApiLinkArgs } from "./workspaceProductApiLink";
export type WorkspaceProductApiLink = import("./workspaceProductApiLink").WorkspaceProductApiLink;
export const WorkspaceProductApiLink: typeof import("./workspaceProductApiLink").WorkspaceProductApiLink = null as any;
utilities.lazyLoad(exports, ["WorkspaceProductApiLink"], () => require("./workspaceProductApiLink"));

export { WorkspaceProductGroupLinkArgs } from "./workspaceProductGroupLink";
export type WorkspaceProductGroupLink = import("./workspaceProductGroupLink").WorkspaceProductGroupLink;
export const WorkspaceProductGroupLink: typeof import("./workspaceProductGroupLink").WorkspaceProductGroupLink = null as any;
utilities.lazyLoad(exports, ["WorkspaceProductGroupLink"], () => require("./workspaceProductGroupLink"));

export { WorkspaceProductPolicyArgs } from "./workspaceProductPolicy";
export type WorkspaceProductPolicy = import("./workspaceProductPolicy").WorkspaceProductPolicy;
export const WorkspaceProductPolicy: typeof import("./workspaceProductPolicy").WorkspaceProductPolicy = null as any;
utilities.lazyLoad(exports, ["WorkspaceProductPolicy"], () => require("./workspaceProductPolicy"));

export { WorkspaceSubscriptionArgs } from "./workspaceSubscription";
export type WorkspaceSubscription = import("./workspaceSubscription").WorkspaceSubscription;
export const WorkspaceSubscription: typeof import("./workspaceSubscription").WorkspaceSubscription = null as any;
utilities.lazyLoad(exports, ["WorkspaceSubscription"], () => require("./workspaceSubscription"));

export { WorkspaceTagArgs } from "./workspaceTag";
export type WorkspaceTag = import("./workspaceTag").WorkspaceTag;
export const WorkspaceTag: typeof import("./workspaceTag").WorkspaceTag = null as any;
utilities.lazyLoad(exports, ["WorkspaceTag"], () => require("./workspaceTag"));

export { WorkspaceTagApiLinkArgs } from "./workspaceTagApiLink";
export type WorkspaceTagApiLink = import("./workspaceTagApiLink").WorkspaceTagApiLink;
export const WorkspaceTagApiLink: typeof import("./workspaceTagApiLink").WorkspaceTagApiLink = null as any;
utilities.lazyLoad(exports, ["WorkspaceTagApiLink"], () => require("./workspaceTagApiLink"));

export { WorkspaceTagOperationLinkArgs } from "./workspaceTagOperationLink";
export type WorkspaceTagOperationLink = import("./workspaceTagOperationLink").WorkspaceTagOperationLink;
export const WorkspaceTagOperationLink: typeof import("./workspaceTagOperationLink").WorkspaceTagOperationLink = null as any;
utilities.lazyLoad(exports, ["WorkspaceTagOperationLink"], () => require("./workspaceTagOperationLink"));

export { WorkspaceTagProductLinkArgs } from "./workspaceTagProductLink";
export type WorkspaceTagProductLink = import("./workspaceTagProductLink").WorkspaceTagProductLink;
export const WorkspaceTagProductLink: typeof import("./workspaceTagProductLink").WorkspaceTagProductLink = null as any;
utilities.lazyLoad(exports, ["WorkspaceTagProductLink"], () => require("./workspaceTagProductLink"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement:Api":
                return new Api(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiDiagnostic":
                return new ApiDiagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiGateway":
                return new ApiGateway(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiGatewayConfigConnection":
                return new ApiGatewayConfigConnection(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiIssue":
                return new ApiIssue(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiIssueAttachment":
                return new ApiIssueAttachment(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiIssueComment":
                return new ApiIssueComment(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiManagementService":
                return new ApiManagementService(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiOperation":
                return new ApiOperation(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiOperationPolicy":
                return new ApiOperationPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiPolicy":
                return new ApiPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiRelease":
                return new ApiRelease(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiSchema":
                return new ApiSchema(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiTagDescription":
                return new ApiTagDescription(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiVersionSet":
                return new ApiVersionSet(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ApiWiki":
                return new ApiWiki(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Authorization":
                return new Authorization(name, <any>undefined, { urn })
            case "azure-native:apimanagement:AuthorizationAccessPolicy":
                return new AuthorizationAccessPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:AuthorizationProvider":
                return new AuthorizationProvider(name, <any>undefined, { urn })
            case "azure-native:apimanagement:AuthorizationServer":
                return new AuthorizationServer(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Backend":
                return new Backend(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Cache":
                return new Cache(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ContentItem":
                return new ContentItem(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ContentType":
                return new ContentType(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Diagnostic":
                return new Diagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Documentation":
                return new Documentation(name, <any>undefined, { urn })
            case "azure-native:apimanagement:EmailTemplate":
                return new EmailTemplate(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Gateway":
                return new Gateway(name, <any>undefined, { urn })
            case "azure-native:apimanagement:GatewayApiEntityTag":
                return new GatewayApiEntityTag(name, <any>undefined, { urn })
            case "azure-native:apimanagement:GatewayCertificateAuthority":
                return new GatewayCertificateAuthority(name, <any>undefined, { urn })
            case "azure-native:apimanagement:GatewayHostnameConfiguration":
                return new GatewayHostnameConfiguration(name, <any>undefined, { urn })
            case "azure-native:apimanagement:GlobalSchema":
                return new GlobalSchema(name, <any>undefined, { urn })
            case "azure-native:apimanagement:GraphQLApiResolver":
                return new GraphQLApiResolver(name, <any>undefined, { urn })
            case "azure-native:apimanagement:GraphQLApiResolverPolicy":
                return new GraphQLApiResolverPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Group":
                return new Group(name, <any>undefined, { urn })
            case "azure-native:apimanagement:GroupUser":
                return new GroupUser(name, <any>undefined, { urn })
            case "azure-native:apimanagement:IdentityProvider":
                return new IdentityProvider(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Logger":
                return new Logger(name, <any>undefined, { urn })
            case "azure-native:apimanagement:NamedValue":
                return new NamedValue(name, <any>undefined, { urn })
            case "azure-native:apimanagement:NotificationRecipientEmail":
                return new NotificationRecipientEmail(name, <any>undefined, { urn })
            case "azure-native:apimanagement:NotificationRecipientUser":
                return new NotificationRecipientUser(name, <any>undefined, { urn })
            case "azure-native:apimanagement:OpenIdConnectProvider":
                return new OpenIdConnectProvider(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Policy":
                return new Policy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:PolicyFragment":
                return new PolicyFragment(name, <any>undefined, { urn })
            case "azure-native:apimanagement:PolicyRestriction":
                return new PolicyRestriction(name, <any>undefined, { urn })
            case "azure-native:apimanagement:PrivateEndpointConnectionByName":
                return new PrivateEndpointConnectionByName(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Product":
                return new Product(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ProductApi":
                return new ProductApi(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ProductApiLink":
                return new ProductApiLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ProductGroup":
                return new ProductGroup(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ProductGroupLink":
                return new ProductGroupLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ProductPolicy":
                return new ProductPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:ProductWiki":
                return new ProductWiki(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Schema":
                return new Schema(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Subscription":
                return new Subscription(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Tag":
                return new Tag(name, <any>undefined, { urn })
            case "azure-native:apimanagement:TagApiLink":
                return new TagApiLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:TagByApi":
                return new TagByApi(name, <any>undefined, { urn })
            case "azure-native:apimanagement:TagByOperation":
                return new TagByOperation(name, <any>undefined, { urn })
            case "azure-native:apimanagement:TagByProduct":
                return new TagByProduct(name, <any>undefined, { urn })
            case "azure-native:apimanagement:TagOperationLink":
                return new TagOperationLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:TagProductLink":
                return new TagProductLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:User":
                return new User(name, <any>undefined, { urn })
            case "azure-native:apimanagement:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApi":
                return new WorkspaceApi(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApiDiagnostic":
                return new WorkspaceApiDiagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApiOperation":
                return new WorkspaceApiOperation(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApiOperationPolicy":
                return new WorkspaceApiOperationPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApiPolicy":
                return new WorkspaceApiPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApiRelease":
                return new WorkspaceApiRelease(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApiSchema":
                return new WorkspaceApiSchema(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceApiVersionSet":
                return new WorkspaceApiVersionSet(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceBackend":
                return new WorkspaceBackend(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceCertificate":
                return new WorkspaceCertificate(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceDiagnostic":
                return new WorkspaceDiagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceGlobalSchema":
                return new WorkspaceGlobalSchema(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceGroup":
                return new WorkspaceGroup(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceGroupUser":
                return new WorkspaceGroupUser(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceLogger":
                return new WorkspaceLogger(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceNamedValue":
                return new WorkspaceNamedValue(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceNotificationRecipientEmail":
                return new WorkspaceNotificationRecipientEmail(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceNotificationRecipientUser":
                return new WorkspaceNotificationRecipientUser(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspacePolicy":
                return new WorkspacePolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspacePolicyFragment":
                return new WorkspacePolicyFragment(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceProduct":
                return new WorkspaceProduct(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceProductApiLink":
                return new WorkspaceProductApiLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceProductGroupLink":
                return new WorkspaceProductGroupLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceProductPolicy":
                return new WorkspaceProductPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceSubscription":
                return new WorkspaceSubscription(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceTag":
                return new WorkspaceTag(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceTagApiLink":
                return new WorkspaceTagApiLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceTagOperationLink":
                return new WorkspaceTagOperationLink(name, <any>undefined, { urn })
            case "azure-native:apimanagement:WorkspaceTagProductLink":
                return new WorkspaceTagProductLink(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement", _module)