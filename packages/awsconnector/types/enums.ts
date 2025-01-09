export const AccelerateConfigurationAccelerationStatus = {
    /**
     * AccelerateConfigurationAccelerationStatus enum Enabled
     */
    Enabled: "Enabled",
    /**
     * AccelerateConfigurationAccelerationStatus enum Suspended
     */
    Suspended: "Suspended",
} as const;

/**
 * Specifies the transfer acceleration status of the bucket.
 */
export type AccelerateConfigurationAccelerationStatus = (typeof AccelerateConfigurationAccelerationStatus)[keyof typeof AccelerateConfigurationAccelerationStatus];

export const AccessControl = {
    /**
     * AccessControl enum AuthenticatedRead
     */
    AuthenticatedRead: "AuthenticatedRead",
    /**
     * AccessControl enum AwsExecRead
     */
    AwsExecRead: "AwsExecRead",
    /**
     * AccessControl enum BucketOwnerFullControl
     */
    BucketOwnerFullControl: "BucketOwnerFullControl",
    /**
     * AccessControl enum BucketOwnerRead
     */
    BucketOwnerRead: "BucketOwnerRead",
    /**
     * AccessControl enum LogDeliveryWrite
     */
    LogDeliveryWrite: "LogDeliveryWrite",
    /**
     * AccessControl enum Private
     */
    Private: "Private",
    /**
     * AccessControl enum PublicRead
     */
    PublicRead: "PublicRead",
    /**
     * AccessControl enum PublicReadWrite
     */
    PublicReadWrite: "PublicReadWrite",
} as const;

/**
 * This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see [Controlling object ownership](https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.  A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 User Guide*.  S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the [AWS::S3::OwnershipControls](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html) property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.  The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see [AWS::S3::BucketPolicy](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html). For examples of common policy configurations, including S3 Server Access Logs buckets and more, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the *Amazon S3 User Guide*.
 */
export type AccessControl = (typeof AccessControl)[keyof typeof AccessControl];

export const Action = {
    /**
     * Action enum ALLOW
     */
    ALLOW: "ALLOW",
    /**
     * Action enum BLOCK
     */
    BLOCK: "BLOCK",
    /**
     * Action enum CAPTCHA
     */
    CAPTCHA: "CAPTCHA",
    /**
     * Action enum CHALLENGE
     */
    CHALLENGE: "CHALLENGE",
    /**
     * Action enum COUNT
     */
    COUNT: "COUNT",
    /**
     * Action enum EXCLUDED_AS_COUNT
     */
    EXCLUDED_AS_COUNT: "EXCLUDED_AS_COUNT",
} as const;

/**
 * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const AddOnStatus = {
    /**
     * AddOnStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * AddOnStatus enum Disabling
     */
    Disabling: "Disabling",
    /**
     * AddOnStatus enum Enabled
     */
    Enabled: "Enabled",
    /**
     * AddOnStatus enum Enabling
     */
    Enabling: "Enabling",
    /**
     * AddOnStatus enum Failed
     */
    Failed: "Failed",
    /**
     * AddOnStatus enum Terminated
     */
    Terminated: "Terminated",
    /**
     * AddOnStatus enum Terminating
     */
    Terminating: "Terminating",
} as const;

/**
 * Status of the Addon
 */
export type AddOnStatus = (typeof AddOnStatus)[keyof typeof AddOnStatus];

export const AmdSevSnpSpecification = {
    /**
     * AmdSevSnpSpecification enum disabled
     */
    Disabled: "disabled",
    /**
     * AmdSevSnpSpecification enum enabled
     */
    Enabled: "enabled",
} as const;

/**
 * Property value
 */
export type AmdSevSnpSpecification = (typeof AmdSevSnpSpecification)[keyof typeof AmdSevSnpSpecification];

export const AnomalyResultEnum = {
    /**
     * AnomalyResultEnum enum anomalous
     */
    Anomalous: "anomalous",
    /**
     * AnomalyResultEnum enum normal
     */
    Normal: "normal",
} as const;

/**
 * Property value
 */
export type AnomalyResultEnum = (typeof AnomalyResultEnum)[keyof typeof AnomalyResultEnum];

export const AppType = {
    /**
     * AppType enum Canvas
     */
    Canvas: "Canvas",
    /**
     * AppType enum JupyterServer
     */
    JupyterServer: "JupyterServer",
    /**
     * AppType enum KernelGateway
     */
    KernelGateway: "KernelGateway",
    /**
     * AppType enum RSessionGateway
     */
    RSessionGateway: "RSessionGateway",
    /**
     * AppType enum RStudioServerPro
     */
    RStudioServerPro: "RStudioServerPro",
} as const;

/**
 * The type of app.
 */
export type AppType = (typeof AppType)[keyof typeof AppType];

export const ArchitectureValues = {
    /**
     * ArchitectureValues enum arm64
     */
    Arm64: "arm64",
    /**
     * ArchitectureValues enum arm64_mac
     */
    Arm64_mac: "arm64_mac",
    /**
     * ArchitectureValues enum i386
     */
    I386: "i386",
    /**
     * ArchitectureValues enum x86_64
     */
    X86_64: "x86_64",
    /**
     * ArchitectureValues enum x86_64_mac
     */
    X86_64_mac: "x86_64_mac",
} as const;

/**
 * Property value
 */
export type ArchitectureValues = (typeof ArchitectureValues)[keyof typeof ArchitectureValues];

export const Architectures = {
    /**
     * Architectures enum arm64
     */
    Arm64: "arm64",
    /**
     * Architectures enum x86_64
     */
    X86_64: "x86_64",
} as const;

/**
 * Architectures enum
 */
export type Architectures = (typeof Architectures)[keyof typeof Architectures];

export const ArtifactNamespace = {
    /**
     * ArtifactNamespace enum BUILD_ID
     */
    BUILD_ID: "BUILD_ID",
    /**
     * ArtifactNamespace enum NONE
     */
    NONE: "NONE",
} as const;

/**
 * Property value
 */
export type ArtifactNamespace = (typeof ArtifactNamespace)[keyof typeof ArtifactNamespace];

export const ArtifactPackaging = {
    /**
     * ArtifactPackaging enum NONE
     */
    NONE: "NONE",
    /**
     * ArtifactPackaging enum ZIP
     */
    ZIP: "ZIP",
} as const;

/**
 * Property value
 */
export type ArtifactPackaging = (typeof ArtifactPackaging)[keyof typeof ArtifactPackaging];

export const ArtifactsType = {
    /**
     * ArtifactsType enum CODEPIPELINE
     */
    CODEPIPELINE: "CODEPIPELINE",
    /**
     * ArtifactsType enum NO_ARTIFACTS
     */
    NO_ARTIFACTS: "NO_ARTIFACTS",
    /**
     * ArtifactsType enum S3
     */
    S3: "S3",
} as const;

/**
 * Property value
 */
export type ArtifactsType = (typeof ArtifactsType)[keyof typeof ArtifactsType];

export const AttachmentStatus = {
    /**
     * AttachmentStatus enum attached
     */
    Attached: "attached",
    /**
     * AttachmentStatus enum attaching
     */
    Attaching: "attaching",
    /**
     * AttachmentStatus enum detached
     */
    Detached: "detached",
    /**
     * AttachmentStatus enum detaching
     */
    Detaching: "detaching",
} as const;

/**
 * Property value
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

export const AuthType = {
    /**
     * AuthType enum BASIC_AUTH
     */
    BASIC_AUTH: "BASIC_AUTH",
    /**
     * AuthType enum CODECONNECTIONS
     */
    CODECONNECTIONS: "CODECONNECTIONS",
    /**
     * AuthType enum OAUTH
     */
    OAUTH: "OAUTH",
    /**
     * AuthType enum PERSONAL_ACCESS_TOKEN
     */
    PERSONAL_ACCESS_TOKEN: "PERSONAL_ACCESS_TOKEN",
} as const;

/**
 * Property value
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

export const AuthenticationMode = {
    /**
     * AuthenticationMode enum API
     */
    API: "API",
    /**
     * AuthenticationMode enum API_AND_CONFIG_MAP
     */
    API_AND_CONFIG_MAP: "API_AND_CONFIG_MAP",
    /**
     * AuthenticationMode enum CONFIG_MAP
     */
    CONFIG_MAP: "CONFIG_MAP",
} as const;

/**
 * Property value
 */
export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const AuthenticationType = {
    /**
     * AuthenticationType enum AMAZON_COGNITO_USER_POOLS
     */
    AMAZON_COGNITO_USER_POOLS: "AMAZON_COGNITO_USER_POOLS",
    /**
     * AuthenticationType enum API_KEY
     */
    API_KEY: "API_KEY",
    /**
     * AuthenticationType enum AWS_IAM
     */
    AWS_IAM: "AWS_IAM",
    /**
     * AuthenticationType enum AWS_LAMBDA
     */
    AWS_LAMBDA: "AWS_LAMBDA",
    /**
     * AuthenticationType enum OPENID_CONNECT
     */
    OPENID_CONNECT: "OPENID_CONNECT",
} as const;

/**
 * Property value
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const AuthorizationConfigIAM = {
    /**
     * AuthorizationConfigIAM enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * AuthorizationConfigIAM enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on in the ``EFSVolumeConfiguration``. If this parameter is omitted, the default value of ``DISABLED`` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints) in the *Amazon Elastic Container Service Developer Guide*.
 */
export type AuthorizationConfigIAM = (typeof AuthorizationConfigIAM)[keyof typeof AuthorizationConfigIAM];

export const AutoTuneState = {
    /**
     * AutoTuneState enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * AutoTuneState enum DISABLED_AND_ROLLBACK_COMPLETE
     */
    DISABLED_AND_ROLLBACK_COMPLETE: "DISABLED_AND_ROLLBACK_COMPLETE",
    /**
     * AutoTuneState enum DISABLED_AND_ROLLBACK_ERROR
     */
    DISABLED_AND_ROLLBACK_ERROR: "DISABLED_AND_ROLLBACK_ERROR",
    /**
     * AutoTuneState enum DISABLED_AND_ROLLBACK_IN_PROGRESS
     */
    DISABLED_AND_ROLLBACK_IN_PROGRESS: "DISABLED_AND_ROLLBACK_IN_PROGRESS",
    /**
     * AutoTuneState enum DISABLED_AND_ROLLBACK_SCHEDULED
     */
    DISABLED_AND_ROLLBACK_SCHEDULED: "DISABLED_AND_ROLLBACK_SCHEDULED",
    /**
     * AutoTuneState enum DISABLE_IN_PROGRESS
     */
    DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
    /**
     * AutoTuneState enum ENABLED
     */
    ENABLED: "ENABLED",
    /**
     * AutoTuneState enum ENABLE_IN_PROGRESS
     */
    ENABLE_IN_PROGRESS: "ENABLE_IN_PROGRESS",
    /**
     * AutoTuneState enum ERROR
     */
    ERROR: "ERROR",
} as const;

/**
 * Property value
 */
export type AutoTuneState = (typeof AutoTuneState)[keyof typeof AutoTuneState];

export const AwsVpcConfigurationAssignPublicIp = {
    /**
     * AwsVpcConfigurationAssignPublicIp enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * AwsVpcConfigurationAssignPublicIp enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Whether the task's elastic network interface receives a public IP address. The default value is ``DISABLED``.
 */
export type AwsVpcConfigurationAssignPublicIp = (typeof AwsVpcConfigurationAssignPublicIp)[keyof typeof AwsVpcConfigurationAssignPublicIp];

export const BackupPolicyStatus = {
    /**
     * BackupPolicyStatus enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * BackupPolicyStatus enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Set the backup policy status for the file system.  +   *ENABLED* - Turns automatic backups on for the file system.   +   *DISABLED* - Turns automatic backups off for the file system.
 */
export type BackupPolicyStatus = (typeof BackupPolicyStatus)[keyof typeof BackupPolicyStatus];

export const BatchReportModeType = {
    /**
     * BatchReportModeType enum REPORT_AGGREGATED_BATCH
     */
    REPORT_AGGREGATED_BATCH: "REPORT_AGGREGATED_BATCH",
    /**
     * BatchReportModeType enum REPORT_INDIVIDUAL_BUILDS
     */
    REPORT_INDIVIDUAL_BUILDS: "REPORT_INDIVIDUAL_BUILDS",
} as const;

/**
 * Property value
 */
export type BatchReportModeType = (typeof BatchReportModeType)[keyof typeof BatchReportModeType];

export const BootModeValues = {
    /**
     * BootModeValues enum legacy-bios
     */
    LegacyBios: "legacy-bios",
    /**
     * BootModeValues enum uefi
     */
    Uefi: "uefi",
    /**
     * BootModeValues enum uefi-preferred
     */
    UefiPreferred: "uefi-preferred",
} as const;

/**
 * Property value
 */
export type BootModeValues = (typeof BootModeValues)[keyof typeof BootModeValues];

export const BucketOwnerAccess = {
    /**
     * BucketOwnerAccess enum FULL
     */
    FULL: "FULL",
    /**
     * BucketOwnerAccess enum NONE
     */
    NONE: "NONE",
    /**
     * BucketOwnerAccess enum READ_ONLY
     */
    READ_ONLY: "READ_ONLY",
} as const;

/**
 * Property value
 */
export type BucketOwnerAccess = (typeof BucketOwnerAccess)[keyof typeof BucketOwnerAccess];

export const CFNFeatureConfigurationStatus = {
    /**
     * CFNFeatureConfigurationStatus enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * CFNFeatureConfigurationStatus enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Property status
 */
export type CFNFeatureConfigurationStatus = (typeof CFNFeatureConfigurationStatus)[keyof typeof CFNFeatureConfigurationStatus];

export const CacheMode = {
    /**
     * CacheMode enum LOCAL_CUSTOM_CACHE
     */
    LOCAL_CUSTOM_CACHE: "LOCAL_CUSTOM_CACHE",
    /**
     * CacheMode enum LOCAL_DOCKER_LAYER_CACHE
     */
    LOCAL_DOCKER_LAYER_CACHE: "LOCAL_DOCKER_LAYER_CACHE",
    /**
     * CacheMode enum LOCAL_SOURCE_CACHE
     */
    LOCAL_SOURCE_CACHE: "LOCAL_SOURCE_CACHE",
} as const;

/**
 * CacheMode enum
 */
export type CacheMode = (typeof CacheMode)[keyof typeof CacheMode];

export const CacheType = {
    /**
     * CacheType enum LOCAL
     */
    LOCAL: "LOCAL",
    /**
     * CacheType enum NO_CACHE
     */
    NO_CACHE: "NO_CACHE",
    /**
     * CacheType enum S3
     */
    S3: "S3",
} as const;

/**
 * Property value
 */
export type CacheType = (typeof CacheType)[keyof typeof CacheType];

export const CallAs = {
    /**
     * CallAs enum DELEGATED_ADMIN
     */
    DELEGATED_ADMIN: "DELEGATED_ADMIN",
    /**
     * CallAs enum SELF
     */
    SELF: "SELF",
} as const;

/**
 * Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.
 */
export type CallAs = (typeof CallAs)[keyof typeof CallAs];

export const Capabilities = {
    /**
     * Capabilities enum CAPABILITY_AUTO_EXPAND
     */
    CAPABILITY_AUTO_EXPAND: "CAPABILITY_AUTO_EXPAND",
    /**
     * Capabilities enum CAPABILITY_IAM
     */
    CAPABILITY_IAM: "CAPABILITY_IAM",
    /**
     * Capabilities enum CAPABILITY_NAMED_IAM
     */
    CAPABILITY_NAMED_IAM: "CAPABILITY_NAMED_IAM",
} as const;

/**
 * Capabilities enum
 */
export type Capabilities = (typeof Capabilities)[keyof typeof Capabilities];

export const CapacityReservationPreference = {
    /**
     * CapacityReservationPreference enum none
     */
    None: "none",
    /**
     * CapacityReservationPreference enum open
     */
    Open: "open",
} as const;

/**
 * Property value
 */
export type CapacityReservationPreference = (typeof CapacityReservationPreference)[keyof typeof CapacityReservationPreference];

export const CertificateStatus = {
    /**
     * CertificateStatus enum EXPIRED
     */
    EXPIRED: "EXPIRED",
    /**
     * CertificateStatus enum FAILED
     */
    FAILED: "FAILED",
    /**
     * CertificateStatus enum INACTIVE
     */
    INACTIVE: "INACTIVE",
    /**
     * CertificateStatus enum ISSUED
     */
    ISSUED: "ISSUED",
    /**
     * CertificateStatus enum PENDING_VALIDATION
     */
    PENDING_VALIDATION: "PENDING_VALIDATION",
    /**
     * CertificateStatus enum REVOKED
     */
    REVOKED: "REVOKED",
    /**
     * CertificateStatus enum VALIDATION_TIMED_OUT
     */
    VALIDATION_TIMED_OUT: "VALIDATION_TIMED_OUT",
} as const;

/**
 * Property value
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

export const CertificateType = {
    /**
     * CertificateType enum AMAZON_ISSUED
     */
    AMAZON_ISSUED: "AMAZON_ISSUED",
    /**
     * CertificateType enum IMPORTED
     */
    IMPORTED: "IMPORTED",
    /**
     * CertificateType enum PRIVATE
     */
    PRIVATE: "PRIVATE",
} as const;

/**
 * Property value
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

export const ClusterEndpointEncryptionType = {
    /**
     * ClusterEndpointEncryptionType enum NONE
     */
    NONE: "NONE",
    /**
     * ClusterEndpointEncryptionType enum TLS
     */
    TLS: "TLS",
} as const;

/**
 * Property value
 */
export type ClusterEndpointEncryptionType = (typeof ClusterEndpointEncryptionType)[keyof typeof ClusterEndpointEncryptionType];

export const ClusterIssueCode = {
    /**
     * ClusterIssueCode enum AccessDenied
     */
    AccessDenied: "AccessDenied",
    /**
     * ClusterIssueCode enum ClusterUnreachable
     */
    ClusterUnreachable: "ClusterUnreachable",
    /**
     * ClusterIssueCode enum ConfigurationConflict
     */
    ConfigurationConflict: "ConfigurationConflict",
    /**
     * ClusterIssueCode enum Ec2SecurityGroupNotFound
     */
    Ec2SecurityGroupNotFound: "Ec2SecurityGroupNotFound",
    /**
     * ClusterIssueCode enum Ec2ServiceNotSubscribed
     */
    Ec2ServiceNotSubscribed: "Ec2ServiceNotSubscribed",
    /**
     * ClusterIssueCode enum Ec2SubnetNotFound
     */
    Ec2SubnetNotFound: "Ec2SubnetNotFound",
    /**
     * ClusterIssueCode enum IamRoleNotFound
     */
    IamRoleNotFound: "IamRoleNotFound",
    /**
     * ClusterIssueCode enum InsufficientFreeAddresses
     */
    InsufficientFreeAddresses: "InsufficientFreeAddresses",
    /**
     * ClusterIssueCode enum InternalFailure
     */
    InternalFailure: "InternalFailure",
    /**
     * ClusterIssueCode enum KmsGrantRevoked
     */
    KmsGrantRevoked: "KmsGrantRevoked",
    /**
     * ClusterIssueCode enum KmsKeyDisabled
     */
    KmsKeyDisabled: "KmsKeyDisabled",
    /**
     * ClusterIssueCode enum KmsKeyMarkedForDeletion
     */
    KmsKeyMarkedForDeletion: "KmsKeyMarkedForDeletion",
    /**
     * ClusterIssueCode enum KmsKeyNotFound
     */
    KmsKeyNotFound: "KmsKeyNotFound",
    /**
     * ClusterIssueCode enum Other
     */
    Other: "Other",
    /**
     * ClusterIssueCode enum ResourceLimitExceeded
     */
    ResourceLimitExceeded: "ResourceLimitExceeded",
    /**
     * ClusterIssueCode enum ResourceNotFound
     */
    ResourceNotFound: "ResourceNotFound",
    /**
     * ClusterIssueCode enum StsRegionalEndpointDisabled
     */
    StsRegionalEndpointDisabled: "StsRegionalEndpointDisabled",
    /**
     * ClusterIssueCode enum UnsupportedVersion
     */
    UnsupportedVersion: "UnsupportedVersion",
    /**
     * ClusterIssueCode enum VpcNotFound
     */
    VpcNotFound: "VpcNotFound",
} as const;

/**
 * Property value
 */
export type ClusterIssueCode = (typeof ClusterIssueCode)[keyof typeof ClusterIssueCode];

export const ClusterState = {
    /**
     * ClusterState enum BOOTSTRAPPING
     */
    BOOTSTRAPPING: "BOOTSTRAPPING",
    /**
     * ClusterState enum RUNNING
     */
    RUNNING: "RUNNING",
    /**
     * ClusterState enum STARTING
     */
    STARTING: "STARTING",
    /**
     * ClusterState enum TERMINATED
     */
    TERMINATED: "TERMINATED",
    /**
     * ClusterState enum TERMINATED_WITH_ERRORS
     */
    TERMINATED_WITH_ERRORS: "TERMINATED_WITH_ERRORS",
    /**
     * ClusterState enum TERMINATING
     */
    TERMINATING: "TERMINATING",
    /**
     * ClusterState enum WAITING
     */
    WAITING: "WAITING",
} as const;

/**
 * Property value
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

export const ClusterStateChangeReasonCode = {
    /**
     * ClusterStateChangeReasonCode enum ALL_STEPS_COMPLETED
     */
    ALL_STEPS_COMPLETED: "ALL_STEPS_COMPLETED",
    /**
     * ClusterStateChangeReasonCode enum BOOTSTRAP_FAILURE
     */
    BOOTSTRAP_FAILURE: "BOOTSTRAP_FAILURE",
    /**
     * ClusterStateChangeReasonCode enum INSTANCE_FAILURE
     */
    INSTANCE_FAILURE: "INSTANCE_FAILURE",
    /**
     * ClusterStateChangeReasonCode enum INSTANCE_FLEET_TIMEOUT
     */
    INSTANCE_FLEET_TIMEOUT: "INSTANCE_FLEET_TIMEOUT",
    /**
     * ClusterStateChangeReasonCode enum INTERNAL_ERROR
     */
    INTERNAL_ERROR: "INTERNAL_ERROR",
    /**
     * ClusterStateChangeReasonCode enum STEP_FAILURE
     */
    STEP_FAILURE: "STEP_FAILURE",
    /**
     * ClusterStateChangeReasonCode enum USER_REQUEST
     */
    USER_REQUEST: "USER_REQUEST",
    /**
     * ClusterStateChangeReasonCode enum VALIDATION_ERROR
     */
    VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * Property value
 */
export type ClusterStateChangeReasonCode = (typeof ClusterStateChangeReasonCode)[keyof typeof ClusterStateChangeReasonCode];

export const ClusterStatus = {
    /**
     * ClusterStatus enum ACTIVE
     */
    ACTIVE: "ACTIVE",
    /**
     * ClusterStatus enum CREATING
     */
    CREATING: "CREATING",
    /**
     * ClusterStatus enum DELETING
     */
    DELETING: "DELETING",
    /**
     * ClusterStatus enum FAILED
     */
    FAILED: "FAILED",
    /**
     * ClusterStatus enum PENDING
     */
    PENDING: "PENDING",
    /**
     * ClusterStatus enum UPDATING
     */
    UPDATING: "UPDATING",
} as const;

/**
 * Property value
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

export const ComplianceSeverity = {
    /**
     * ComplianceSeverity enum CRITICAL
     */
    CRITICAL: "CRITICAL",
    /**
     * ComplianceSeverity enum HIGH
     */
    HIGH: "HIGH",
    /**
     * ComplianceSeverity enum INFORMATIONAL
     */
    INFORMATIONAL: "INFORMATIONAL",
    /**
     * ComplianceSeverity enum LOW
     */
    LOW: "LOW",
    /**
     * ComplianceSeverity enum MEDIUM
     */
    MEDIUM: "MEDIUM",
    /**
     * ComplianceSeverity enum UNSPECIFIED
     */
    UNSPECIFIED: "UNSPECIFIED",
} as const;

/**
 * Property value
 */
export type ComplianceSeverity = (typeof ComplianceSeverity)[keyof typeof ComplianceSeverity];

export const ComplianceStatus = {
    /**
     * ComplianceStatus enum COMPLIANT
     */
    COMPLIANT: "COMPLIANT",
    /**
     * ComplianceStatus enum NON_COMPLIANT
     */
    NON_COMPLIANT: "NON_COMPLIANT",
} as const;

/**
 * Property value
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

export const ComputeType = {
    /**
     * ComputeType enum BUILD_GENERAL1_2XLARGE
     */
    BUILD_GENERAL1_2XLARGE: "BUILD_GENERAL1_2XLARGE",
    /**
     * ComputeType enum BUILD_GENERAL1_LARGE
     */
    BUILD_GENERAL1_LARGE: "BUILD_GENERAL1_LARGE",
    /**
     * ComputeType enum BUILD_GENERAL1_MEDIUM
     */
    BUILD_GENERAL1_MEDIUM: "BUILD_GENERAL1_MEDIUM",
    /**
     * ComputeType enum BUILD_GENERAL1_SMALL
     */
    BUILD_GENERAL1_SMALL: "BUILD_GENERAL1_SMALL",
    /**
     * ComputeType enum BUILD_GENERAL1_XLARGE
     */
    BUILD_GENERAL1_XLARGE: "BUILD_GENERAL1_XLARGE",
    /**
     * ComputeType enum BUILD_LAMBDA_10GB
     */
    BUILD_LAMBDA_10GB: "BUILD_LAMBDA_10GB",
    /**
     * ComputeType enum BUILD_LAMBDA_1GB
     */
    BUILD_LAMBDA_1GB: "BUILD_LAMBDA_1GB",
    /**
     * ComputeType enum BUILD_LAMBDA_2GB
     */
    BUILD_LAMBDA_2GB: "BUILD_LAMBDA_2GB",
    /**
     * ComputeType enum BUILD_LAMBDA_4GB
     */
    BUILD_LAMBDA_4GB: "BUILD_LAMBDA_4GB",
    /**
     * ComputeType enum BUILD_LAMBDA_8GB
     */
    BUILD_LAMBDA_8GB: "BUILD_LAMBDA_8GB",
} as const;

/**
 * Property value
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

export const ConfigChangeStatus = {
    /**
     * ConfigChangeStatus enum ApplyingChanges
     */
    ApplyingChanges: "ApplyingChanges",
    /**
     * ConfigChangeStatus enum Cancelled
     */
    Cancelled: "Cancelled",
    /**
     * ConfigChangeStatus enum Completed
     */
    Completed: "Completed",
    /**
     * ConfigChangeStatus enum Initializing
     */
    Initializing: "Initializing",
    /**
     * ConfigChangeStatus enum Pending
     */
    Pending: "Pending",
    /**
     * ConfigChangeStatus enum PendingUserInput
     */
    PendingUserInput: "PendingUserInput",
    /**
     * ConfigChangeStatus enum Validating
     */
    Validating: "Validating",
    /**
     * ConfigChangeStatus enum ValidationFailed
     */
    ValidationFailed: "ValidationFailed",
} as const;

/**
 * Property value
 */
export type ConfigChangeStatus = (typeof ConfigChangeStatus)[keyof typeof ConfigChangeStatus];

export const ContinuousBackupsStatus = {
    /**
     * ContinuousBackupsStatus enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * ContinuousBackupsStatus enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Property value
 */
export type ContinuousBackupsStatus = (typeof ContinuousBackupsStatus)[keyof typeof ContinuousBackupsStatus];

export const CorsRuleAllowedMethods = {
    /**
     * CorsRuleAllowedMethods enum DELETE
     */
    DELETE: "DELETE",
    /**
     * CorsRuleAllowedMethods enum GET
     */
    GET: "GET",
    /**
     * CorsRuleAllowedMethods enum HEAD
     */
    HEAD: "HEAD",
    /**
     * CorsRuleAllowedMethods enum POST
     */
    POST: "POST",
    /**
     * CorsRuleAllowedMethods enum PUT
     */
    PUT: "PUT",
} as const;

/**
 * CorsRuleAllowedMethods enum
 */
export type CorsRuleAllowedMethods = (typeof CorsRuleAllowedMethods)[keyof typeof CorsRuleAllowedMethods];

export const CredentialProviderType = {
    /**
     * CredentialProviderType enum SECRETS_MANAGER
     */
    SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;

/**
 * Property value
 */
export type CredentialProviderType = (typeof CredentialProviderType)[keyof typeof CredentialProviderType];

export const DataSourceLevelMetricsBehavior = {
    /**
     * DataSourceLevelMetricsBehavior enum FULL_REQUEST_DATA_SOURCE_METRICS
     */
    FULL_REQUEST_DATA_SOURCE_METRICS: "FULL_REQUEST_DATA_SOURCE_METRICS",
    /**
     * DataSourceLevelMetricsBehavior enum PER_DATA_SOURCE_METRICS
     */
    PER_DATA_SOURCE_METRICS: "PER_DATA_SOURCE_METRICS",
} as const;

/**
 * Property value
 */
export type DataSourceLevelMetricsBehavior = (typeof DataSourceLevelMetricsBehavior)[keyof typeof DataSourceLevelMetricsBehavior];

export const DataType = {
    /**
     * DataType enum aws:ec2:image
     */
    AwsEc2Image: "aws:ec2:image",
    /**
     * DataType enum text
     */
    Text: "text",
} as const;

/**
 * The data type of the parameter, such as ``text`` or ``aws:ec2:image``. The default is ``text``.
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

export const DefaultAction = {
    /**
     * DefaultAction enum ALLOW
     */
    ALLOW: "ALLOW",
    /**
     * DefaultAction enum DENY
     */
    DENY: "DENY",
} as const;

/**
 * Property value
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const DefaultBehavior = {
    /**
     * DefaultBehavior enum DROP
     */
    DROP: "DROP",
    /**
     * DefaultBehavior enum KEEP
     */
    KEEP: "KEEP",
} as const;

/**
 * Default handling for logs that don't match any of the specified filtering conditions.
 */
export type DefaultBehavior = (typeof DefaultBehavior)[keyof typeof DefaultBehavior];

export const DefaultRetentionMode = {
    /**
     * DefaultRetentionMode enum COMPLIANCE
     */
    COMPLIANCE: "COMPLIANCE",
    /**
     * DefaultRetentionMode enum GOVERNANCE
     */
    GOVERNANCE: "GOVERNANCE",
} as const;

/**
 * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
 */
export type DefaultRetentionMode = (typeof DefaultRetentionMode)[keyof typeof DefaultRetentionMode];

export const DeleteMarkerReplicationStatus = {
    /**
     * DeleteMarkerReplicationStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * DeleteMarkerReplicationStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Indicates whether to replicate delete markers. Disabled by default.
 */
export type DeleteMarkerReplicationStatus = (typeof DeleteMarkerReplicationStatus)[keyof typeof DeleteMarkerReplicationStatus];

export const DeploymentControllerType = {
    /**
     * DeploymentControllerType enum CODE_DEPLOY
     */
    CODE_DEPLOY: "CODE_DEPLOY",
    /**
     * DeploymentControllerType enum ECS
     */
    ECS: "ECS",
    /**
     * DeploymentControllerType enum EXTERNAL
     */
    EXTERNAL: "EXTERNAL",
} as const;

/**
 * The deployment controller type to use. There are three deployment controller types available:  + ECS The rolling update (ECS) deployment type involves replacing the current running version of the container with the latest version. The number of containers Amazon ECS adds or removes from the service during a rolling update is controlled by adjusting the minimum and maximum number of healthy tasks allowed during a service deployment, as specified in the DeploymentConfiguration. + CODE_DEPLOY The blue/green (CODE_DEPLOY) deployment type uses the blue/green deployment model powered by , which allows you to verify a new deployment of a service before sending production traffic to it. + EXTERNAL The external (EXTERNAL) deployment type enables you to use any third-party deployment controller for full control over the deployment process for an Amazon ECS service.
 */
export type DeploymentControllerType = (typeof DeploymentControllerType)[keyof typeof DeploymentControllerType];

export const DeploymentStatus = {
    /**
     * DeploymentStatus enum COMPLETED
     */
    COMPLETED: "COMPLETED",
    /**
     * DeploymentStatus enum ELIGIBLE
     */
    ELIGIBLE: "ELIGIBLE",
    /**
     * DeploymentStatus enum IN_PROGRESS
     */
    IN_PROGRESS: "IN_PROGRESS",
    /**
     * DeploymentStatus enum NOT_ELIGIBLE
     */
    NOT_ELIGIBLE: "NOT_ELIGIBLE",
    /**
     * DeploymentStatus enum PENDING_UPDATE
     */
    PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * Property value
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

export const DeploymentTargetsAccountFilterType = {
    /**
     * DeploymentTargetsAccountFilterType enum DIFFERENCE
     */
    DIFFERENCE: "DIFFERENCE",
    /**
     * DeploymentTargetsAccountFilterType enum INTERSECTION
     */
    INTERSECTION: "INTERSECTION",
    /**
     * DeploymentTargetsAccountFilterType enum NONE
     */
    NONE: "NONE",
    /**
     * DeploymentTargetsAccountFilterType enum UNION
     */
    UNION: "UNION",
} as const;

/**
 * The filter type you want to apply on organizational units and accounts.
 */
export type DeploymentTargetsAccountFilterType = (typeof DeploymentTargetsAccountFilterType)[keyof typeof DeploymentTargetsAccountFilterType];

export const DestinationFormat = {
    /**
     * DestinationFormat enum CSV
     */
    CSV: "CSV",
    /**
     * DestinationFormat enum ORC
     */
    ORC: "ORC",
    /**
     * DestinationFormat enum Parquet
     */
    Parquet: "Parquet",
} as const;

/**
 * Specifies the file format used when exporting data to Amazon S3.  *Allowed values*: ``CSV`` | ``ORC`` | ``Parquet``
 */
export type DestinationFormat = (typeof DestinationFormat)[keyof typeof DestinationFormat];

export const DeviceType = {
    /**
     * DeviceType enum ebs
     */
    Ebs: "ebs",
    /**
     * DeviceType enum instance-store
     */
    InstanceStore: "instance-store",
} as const;

/**
 * Property value
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

export const Distribution = {
    /**
     * Distribution enum ByLogStream
     */
    ByLogStream: "ByLogStream",
    /**
     * Distribution enum Random
     */
    Random: "Random",
} as const;

/**
 * The method used to distribute log data to the destination, which can be either random or grouped by log stream.
 */
export type Distribution = (typeof Distribution)[keyof typeof Distribution];

export const DomainProcessingStatusType = {
    /**
     * DomainProcessingStatusType enum Active
     */
    Active: "Active",
    /**
     * DomainProcessingStatusType enum Creating
     */
    Creating: "Creating",
    /**
     * DomainProcessingStatusType enum Deleting
     */
    Deleting: "Deleting",
    /**
     * DomainProcessingStatusType enum Isolated
     */
    Isolated: "Isolated",
    /**
     * DomainProcessingStatusType enum Modifying
     */
    Modifying: "Modifying",
    /**
     * DomainProcessingStatusType enum UpdatingServiceSoftware
     */
    UpdatingServiceSoftware: "UpdatingServiceSoftware",
    /**
     * DomainProcessingStatusType enum UpgradingEngineVersion
     */
    UpgradingEngineVersion: "UpgradingEngineVersion",
} as const;

/**
 * Property value
 */
export type DomainProcessingStatusType = (typeof DomainProcessingStatusType)[keyof typeof DomainProcessingStatusType];

export const DomainType = {
    /**
     * DomainType enum standard
     */
    Standard: "standard",
    /**
     * DomainType enum vpc
     */
    Vpc: "vpc",
} as const;

/**
 * Property value
 */
export type DomainType = (typeof DomainType)[keyof typeof DomainType];

export const EBSTagSpecificationPropagateTags = {
    /**
     * EBSTagSpecificationPropagateTags enum SERVICE
     */
    SERVICE: "SERVICE",
    /**
     * EBSTagSpecificationPropagateTags enum TASK_DEFINITION
     */
    TASK_DEFINITION: "TASK_DEFINITION",
} as const;

/**
 * Determines whether to propagate the tags from the task definition to the Amazon EBS volume. Tags can only propagate to a ``SERVICE`` specified in ``ServiceVolumeConfiguration``. If no value is specified, the tags aren't propagated.
 */
export type EBSTagSpecificationPropagateTags = (typeof EBSTagSpecificationPropagateTags)[keyof typeof EBSTagSpecificationPropagateTags];

export const EFSVolumeConfigurationTransitEncryption = {
    /**
     * EFSVolumeConfigurationTransitEncryption enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * EFSVolumeConfigurationTransitEncryption enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be turned on if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of ``DISABLED`` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the *Amazon Elastic File System User Guide*.
 */
export type EFSVolumeConfigurationTransitEncryption = (typeof EFSVolumeConfigurationTransitEncryption)[keyof typeof EFSVolumeConfigurationTransitEncryption];

export const EncryptionConfigurationEncryptionType = {
    /**
     * EncryptionConfigurationEncryptionType enum AES256
     */
    AES256: "AES256",
    /**
     * EncryptionConfigurationEncryptionType enum KMS
     */
    KMS: "KMS",
} as const;

/**
 * The encryption type to use. If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created. For more information, see [Protecting data using server-side encryption with an key stored in (SSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Console Developer Guide*. If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES-256 encryption algorithm. For more information, see [Protecting data using server-side encryption with Amazon S3-managed encryption keys (SSE-S3)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html) in the *Ama The encryption type to use.
 */
export type EncryptionConfigurationEncryptionType = (typeof EncryptionConfigurationEncryptionType)[keyof typeof EncryptionConfigurationEncryptionType];

export const EnvironmentType = {
    /**
     * EnvironmentType enum ARM_CONTAINER
     */
    ARM_CONTAINER: "ARM_CONTAINER",
    /**
     * EnvironmentType enum ARM_LAMBDA_CONTAINER
     */
    ARM_LAMBDA_CONTAINER: "ARM_LAMBDA_CONTAINER",
    /**
     * EnvironmentType enum LINUX_CONTAINER
     */
    LINUX_CONTAINER: "LINUX_CONTAINER",
    /**
     * EnvironmentType enum LINUX_GPU_CONTAINER
     */
    LINUX_GPU_CONTAINER: "LINUX_GPU_CONTAINER",
    /**
     * EnvironmentType enum LINUX_LAMBDA_CONTAINER
     */
    LINUX_LAMBDA_CONTAINER: "LINUX_LAMBDA_CONTAINER",
    /**
     * EnvironmentType enum WINDOWS_CONTAINER
     */
    WINDOWS_CONTAINER: "WINDOWS_CONTAINER",
    /**
     * EnvironmentType enum WINDOWS_SERVER_2019_CONTAINER
     */
    WINDOWS_SERVER_2019_CONTAINER: "WINDOWS_SERVER_2019_CONTAINER",
} as const;

/**
 * Property value
 */
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

export const EnvironmentVariableType = {
    /**
     * EnvironmentVariableType enum PARAMETER_STORE
     */
    PARAMETER_STORE: "PARAMETER_STORE",
    /**
     * EnvironmentVariableType enum PLAINTEXT
     */
    PLAINTEXT: "PLAINTEXT",
    /**
     * EnvironmentVariableType enum SECRETS_MANAGER
     */
    SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;

/**
 * Property value
 */
export type EnvironmentVariableType = (typeof EnvironmentVariableType)[keyof typeof EnvironmentVariableType];

export const EventCode = {
    /**
     * EventCode enum instance-reboot
     */
    InstanceReboot: "instance-reboot",
    /**
     * EventCode enum instance-retirement
     */
    InstanceRetirement: "instance-retirement",
    /**
     * EventCode enum instance-stop
     */
    InstanceStop: "instance-stop",
    /**
     * EventCode enum system-maintenance
     */
    SystemMaintenance: "system-maintenance",
    /**
     * EventCode enum system-reboot
     */
    SystemReboot: "system-reboot",
} as const;

/**
 * Property value
 */
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

export const EventSelectorReadWriteType = {
    /**
     * EventSelectorReadWriteType enum All
     */
    All: "All",
    /**
     * EventSelectorReadWriteType enum ReadOnly
     */
    ReadOnly: "ReadOnly",
    /**
     * EventSelectorReadWriteType enum WriteOnly
     */
    WriteOnly: "WriteOnly",
} as const;

/**
 * Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.
 */
export type EventSelectorReadWriteType = (typeof EventSelectorReadWriteType)[keyof typeof EventSelectorReadWriteType];

export const ExportSourceType = {
    /**
     * ExportSourceType enum CLUSTER
     */
    CLUSTER: "CLUSTER",
    /**
     * ExportSourceType enum SNAPSHOT
     */
    SNAPSHOT: "SNAPSHOT",
} as const;

/**
 * Property value
 */
export type ExportSourceType = (typeof ExportSourceType)[keyof typeof ExportSourceType];

export const ExtendedKeyUsageName = {
    /**
     * ExtendedKeyUsageName enum ANY
     */
    ANY: "ANY",
    /**
     * ExtendedKeyUsageName enum CODE_SIGNING
     */
    CODE_SIGNING: "CODE_SIGNING",
    /**
     * ExtendedKeyUsageName enum CUSTOM
     */
    CUSTOM: "CUSTOM",
    /**
     * ExtendedKeyUsageName enum EMAIL_PROTECTION
     */
    EMAIL_PROTECTION: "EMAIL_PROTECTION",
    /**
     * ExtendedKeyUsageName enum IPSEC_END_SYSTEM
     */
    IPSEC_END_SYSTEM: "IPSEC_END_SYSTEM",
    /**
     * ExtendedKeyUsageName enum IPSEC_TUNNEL
     */
    IPSEC_TUNNEL: "IPSEC_TUNNEL",
    /**
     * ExtendedKeyUsageName enum IPSEC_USER
     */
    IPSEC_USER: "IPSEC_USER",
    /**
     * ExtendedKeyUsageName enum NONE
     */
    NONE: "NONE",
    /**
     * ExtendedKeyUsageName enum OCSP_SIGNING
     */
    OCSP_SIGNING: "OCSP_SIGNING",
    /**
     * ExtendedKeyUsageName enum TIME_STAMPING
     */
    TIME_STAMPING: "TIME_STAMPING",
    /**
     * ExtendedKeyUsageName enum TLS_WEB_CLIENT_AUTHENTICATION
     */
    TLS_WEB_CLIENT_AUTHENTICATION: "TLS_WEB_CLIENT_AUTHENTICATION",
    /**
     * ExtendedKeyUsageName enum TLS_WEB_SERVER_AUTHENTICATION
     */
    TLS_WEB_SERVER_AUTHENTICATION: "TLS_WEB_SERVER_AUTHENTICATION",
} as const;

/**
 * ExtendedKeyUsageName enum
 */
export type ExtendedKeyUsageName = (typeof ExtendedKeyUsageName)[keyof typeof ExtendedKeyUsageName];

export const FeatureSet = {
    /**
     * FeatureSet enum ALL
     */
    ALL: "ALL",
    /**
     * FeatureSet enum CONSOLIDATED_BILLING
     */
    CONSOLIDATED_BILLING: "CONSOLIDATED_BILLING",
} as const;

/**
 * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
 */
export type FeatureSet = (typeof FeatureSet)[keyof typeof FeatureSet];

export const FieldLogLevel = {
    /**
     * FieldLogLevel enum ALL
     */
    ALL: "ALL",
    /**
     * FieldLogLevel enum ERROR
     */
    ERROR: "ERROR",
    /**
     * FieldLogLevel enum NONE
     */
    NONE: "NONE",
} as const;

/**
 * Property value
 */
export type FieldLogLevel = (typeof FieldLogLevel)[keyof typeof FieldLogLevel];

export const FileFormat = {
    /**
     * FileFormat enum parquet
     */
    Parquet: "parquet",
    /**
     * FileFormat enum plain-text
     */
    PlainText: "plain-text",
} as const;

/**
 * Property fileFormat
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

export const FileSystemProtectionReplicationOverwriteProtection = {
    /**
     * FileSystemProtectionReplicationOverwriteProtection enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * FileSystemProtectionReplicationOverwriteProtection enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * The status of the file system's replication overwrite protection.  +   ``ENABLED`` – The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is ``ENABLED`` by default.   +   ``DISABLED`` – The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.  +   ``REPLICATING`` – The file system is being used as the destination file system in a replication configuration. The file system is read-only and is only modified only by EFS replication.   If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.
 */
export type FileSystemProtectionReplicationOverwriteProtection = (typeof FileSystemProtectionReplicationOverwriteProtection)[keyof typeof FileSystemProtectionReplicationOverwriteProtection];

export const FileSystemType = {
    /**
     * FileSystemType enum EFS
     */
    EFS: "EFS",
} as const;

/**
 * Property value
 */
export type FileSystemType = (typeof FileSystemType)[keyof typeof FileSystemType];

export const FilterBehavior = {
    /**
     * FilterBehavior enum DROP
     */
    DROP: "DROP",
    /**
     * FilterBehavior enum KEEP
     */
    KEEP: "KEEP",
} as const;

/**
 * How to handle logs that satisfy the filter's conditions and requirement.
 */
export type FilterBehavior = (typeof FilterBehavior)[keyof typeof FilterBehavior];

export const FilterRequirement = {
    /**
     * FilterRequirement enum MEETS_ALL
     */
    MEETS_ALL: "MEETS_ALL",
    /**
     * FilterRequirement enum MEETS_ANY
     */
    MEETS_ANY: "MEETS_ANY",
} as const;

/**
 * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
 */
export type FilterRequirement = (typeof FilterRequirement)[keyof typeof FilterRequirement];

export const GraphQLApiIntrospectionConfig = {
    /**
     * GraphQLApiIntrospectionConfig enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * GraphQLApiIntrospectionConfig enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Property value
 */
export type GraphQLApiIntrospectionConfig = (typeof GraphQLApiIntrospectionConfig)[keyof typeof GraphQLApiIntrospectionConfig];

export const GraphQLApiType = {
    /**
     * GraphQLApiType enum GRAPHQL
     */
    GRAPHQL: "GRAPHQL",
    /**
     * GraphQLApiType enum MERGED
     */
    MERGED: "MERGED",
} as const;

/**
 * Property value
 */
export type GraphQLApiType = (typeof GraphQLApiType)[keyof typeof GraphQLApiType];

export const GraphQLApiVisibility = {
    /**
     * GraphQLApiVisibility enum GLOBAL
     */
    GLOBAL: "GLOBAL",
    /**
     * GraphQLApiVisibility enum PRIVATE
     */
    PRIVATE: "PRIVATE",
} as const;

/**
 * Property value
 */
export type GraphQLApiVisibility = (typeof GraphQLApiVisibility)[keyof typeof GraphQLApiVisibility];

export const HeaderDirection = {
    /**
     * HeaderDirection enum ANY
     */
    ANY: "ANY",
    /**
     * HeaderDirection enum FORWARD
     */
    FORWARD: "FORWARD",
} as const;

/**
 * Property direction
 */
export type HeaderDirection = (typeof HeaderDirection)[keyof typeof HeaderDirection];

export const HeaderProtocol = {
    /**
     * HeaderProtocol enum DCERPC
     */
    DCERPC: "DCERPC",
    /**
     * HeaderProtocol enum DHCP
     */
    DHCP: "DHCP",
    /**
     * HeaderProtocol enum DNS
     */
    DNS: "DNS",
    /**
     * HeaderProtocol enum FTP
     */
    FTP: "FTP",
    /**
     * HeaderProtocol enum HTTP
     */
    HTTP: "HTTP",
    /**
     * HeaderProtocol enum ICMP
     */
    ICMP: "ICMP",
    /**
     * HeaderProtocol enum IKEV2
     */
    IKEV2: "IKEV2",
    /**
     * HeaderProtocol enum IMAP
     */
    IMAP: "IMAP",
    /**
     * HeaderProtocol enum IP
     */
    IP: "IP",
    /**
     * HeaderProtocol enum KRB5
     */
    KRB5: "KRB5",
    /**
     * HeaderProtocol enum MSN
     */
    MSN: "MSN",
    /**
     * HeaderProtocol enum NTP
     */
    NTP: "NTP",
    /**
     * HeaderProtocol enum SMB
     */
    SMB: "SMB",
    /**
     * HeaderProtocol enum SMTP
     */
    SMTP: "SMTP",
    /**
     * HeaderProtocol enum SSH
     */
    SSH: "SSH",
    /**
     * HeaderProtocol enum TCP
     */
    TCP: "TCP",
    /**
     * HeaderProtocol enum TFTP
     */
    TFTP: "TFTP",
    /**
     * HeaderProtocol enum TLS
     */
    TLS: "TLS",
    /**
     * HeaderProtocol enum UDP
     */
    UDP: "UDP",
} as const;

/**
 * Property protocol
 */
export type HeaderProtocol = (typeof HeaderProtocol)[keyof typeof HeaderProtocol];

export const HostnameType = {
    /**
     * HostnameType enum ip-name
     */
    IpName: "ip-name",
    /**
     * HostnameType enum resource-name
     */
    ResourceName: "resource-name",
} as const;

/**
 * Property value
 */
export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

export const HttpTokensState = {
    /**
     * HttpTokensState enum optional
     */
    Optional: "optional",
    /**
     * HttpTokensState enum required
     */
    Required: "required",
} as const;

/**
 * Property value
 */
export type HttpTokensState = (typeof HttpTokensState)[keyof typeof HttpTokensState];

export const HypervisorType = {
    /**
     * HypervisorType enum ovm
     */
    Ovm: "ovm",
    /**
     * HypervisorType enum xen
     */
    Xen: "xen",
} as const;

/**
 * Property value
 */
export type HypervisorType = (typeof HypervisorType)[keyof typeof HypervisorType];

export const IPAddressType = {
    /**
     * IPAddressType enum dualstack
     */
    Dualstack: "dualstack",
    /**
     * IPAddressType enum ipv4
     */
    Ipv4: "ipv4",
} as const;

/**
 * Property value
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

export const ImagePullCredentialsType = {
    /**
     * ImagePullCredentialsType enum CODEBUILD
     */
    CODEBUILD: "CODEBUILD",
    /**
     * ImagePullCredentialsType enum SERVICE_ROLE
     */
    SERVICE_ROLE: "SERVICE_ROLE",
} as const;

/**
 * Property value
 */
export type ImagePullCredentialsType = (typeof ImagePullCredentialsType)[keyof typeof ImagePullCredentialsType];

export const ImageState = {
    /**
     * ImageState enum available
     */
    Available: "available",
    /**
     * ImageState enum deregistered
     */
    Deregistered: "deregistered",
    /**
     * ImageState enum disabled
     */
    Disabled: "disabled",
    /**
     * ImageState enum error
     */
    Error: "error",
    /**
     * ImageState enum failed
     */
    Failed: "failed",
    /**
     * ImageState enum invalid
     */
    Invalid: "invalid",
    /**
     * ImageState enum pending
     */
    Pending: "pending",
    /**
     * ImageState enum transient
     */
    Transient: "transient",
} as const;

/**
 * Property value
 */
export type ImageState = (typeof ImageState)[keyof typeof ImageState];

export const ImageTagMutability = {
    /**
     * ImageTagMutability enum IMMUTABLE
     */
    IMMUTABLE: "IMMUTABLE",
    /**
     * ImageTagMutability enum MUTABLE
     */
    MUTABLE: "MUTABLE",
} as const;

/**
 * The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
 */
export type ImageTagMutability = (typeof ImageTagMutability)[keyof typeof ImageTagMutability];

export const ImageTypeValues = {
    /**
     * ImageTypeValues enum kernel
     */
    Kernel: "kernel",
    /**
     * ImageTypeValues enum machine
     */
    Machine: "machine",
    /**
     * ImageTypeValues enum ramdisk
     */
    Ramdisk: "ramdisk",
} as const;

/**
 * Property value
 */
export type ImageTypeValues = (typeof ImageTypeValues)[keyof typeof ImageTypeValues];

export const ImdsSupportValues = {
    /**
     * ImdsSupportValues enum v2.0
     */
    V20: "v2.0",
} as const;

/**
 * Property value
 */
export type ImdsSupportValues = (typeof ImdsSupportValues)[keyof typeof ImdsSupportValues];

export const InitiatedBy = {
    /**
     * InitiatedBy enum CUSTOMER
     */
    CUSTOMER: "CUSTOMER",
    /**
     * InitiatedBy enum SERVICE
     */
    SERVICE: "SERVICE",
} as const;

/**
 * Property value
 */
export type InitiatedBy = (typeof InitiatedBy)[keyof typeof InitiatedBy];

export const InstanceAutoRecoveryState = {
    /**
     * InstanceAutoRecoveryState enum default
     */
    Default: "default",
    /**
     * InstanceAutoRecoveryState enum disabled
     */
    Disabled: "disabled",
} as const;

/**
 * Property value
 */
export type InstanceAutoRecoveryState = (typeof InstanceAutoRecoveryState)[keyof typeof InstanceAutoRecoveryState];

export const InstanceBootModeValues = {
    /**
     * InstanceBootModeValues enum legacy-bios
     */
    LegacyBios: "legacy-bios",
    /**
     * InstanceBootModeValues enum uefi
     */
    Uefi: "uefi",
} as const;

/**
 * Property value
 */
export type InstanceBootModeValues = (typeof InstanceBootModeValues)[keyof typeof InstanceBootModeValues];

export const InstanceCollectionType = {
    /**
     * InstanceCollectionType enum INSTANCE_FLEET
     */
    INSTANCE_FLEET: "INSTANCE_FLEET",
    /**
     * InstanceCollectionType enum INSTANCE_GROUP
     */
    INSTANCE_GROUP: "INSTANCE_GROUP",
} as const;

/**
 * Property value
 */
export type InstanceCollectionType = (typeof InstanceCollectionType)[keyof typeof InstanceCollectionType];

export const InstanceLifecycleType = {
    /**
     * InstanceLifecycleType enum capacity-block
     */
    CapacityBlock: "capacity-block",
    /**
     * InstanceLifecycleType enum scheduled
     */
    Scheduled: "scheduled",
    /**
     * InstanceLifecycleType enum spot
     */
    Spot: "spot",
} as const;

/**
 * Property value
 */
export type InstanceLifecycleType = (typeof InstanceLifecycleType)[keyof typeof InstanceLifecycleType];

export const InstanceMetadataEndpointState = {
    /**
     * InstanceMetadataEndpointState enum disabled
     */
    Disabled: "disabled",
    /**
     * InstanceMetadataEndpointState enum enabled
     */
    Enabled: "enabled",
} as const;

/**
 * Property value
 */
export type InstanceMetadataEndpointState = (typeof InstanceMetadataEndpointState)[keyof typeof InstanceMetadataEndpointState];

export const InstanceMetadataOptionsState = {
    /**
     * InstanceMetadataOptionsState enum applied
     */
    Applied: "applied",
    /**
     * InstanceMetadataOptionsState enum pending
     */
    Pending: "pending",
} as const;

/**
 * Property value
 */
export type InstanceMetadataOptionsState = (typeof InstanceMetadataOptionsState)[keyof typeof InstanceMetadataOptionsState];

export const InstanceMetadataProtocolState = {
    /**
     * InstanceMetadataProtocolState enum disabled
     */
    Disabled: "disabled",
    /**
     * InstanceMetadataProtocolState enum enabled
     */
    Enabled: "enabled",
} as const;

/**
 * Property value
 */
export type InstanceMetadataProtocolState = (typeof InstanceMetadataProtocolState)[keyof typeof InstanceMetadataProtocolState];

export const InstanceMetadataTagsState = {
    /**
     * InstanceMetadataTagsState enum disabled
     */
    Disabled: "disabled",
    /**
     * InstanceMetadataTagsState enum enabled
     */
    Enabled: "enabled",
} as const;

/**
 * Property value
 */
export type InstanceMetadataTagsState = (typeof InstanceMetadataTagsState)[keyof typeof InstanceMetadataTagsState];

export const InstanceRoleType = {
    /**
     * InstanceRoleType enum CORE
     */
    CORE: "CORE",
    /**
     * InstanceRoleType enum MASTER
     */
    MASTER: "MASTER",
    /**
     * InstanceRoleType enum TASK
     */
    TASK: "TASK",
} as const;

/**
 * Property value
 */
export type InstanceRoleType = (typeof InstanceRoleType)[keyof typeof InstanceRoleType];

export const InstanceStateName = {
    /**
     * InstanceStateName enum pending
     */
    Pending: "pending",
    /**
     * InstanceStateName enum running
     */
    Running: "running",
    /**
     * InstanceStateName enum shutting-down
     */
    ShuttingDown: "shutting-down",
    /**
     * InstanceStateName enum stopped
     */
    Stopped: "stopped",
    /**
     * InstanceStateName enum stopping
     */
    Stopping: "stopping",
    /**
     * InstanceStateName enum terminated
     */
    Terminated: "terminated",
} as const;

/**
 * Property value
 */
export type InstanceStateName = (typeof InstanceStateName)[keyof typeof InstanceStateName];

export const InstanceType = {
    /**
     * InstanceType enum ml.c4.2xlarge
     */
    MlC42xlarge: "ml.c4.2xlarge",
    /**
     * InstanceType enum ml.c4.4xlarge
     */
    MlC44xlarge: "ml.c4.4xlarge",
    /**
     * InstanceType enum ml.c4.8xlarge
     */
    MlC48xlarge: "ml.c4.8xlarge",
    /**
     * InstanceType enum ml.c4.xlarge
     */
    MlC4Xlarge: "ml.c4.xlarge",
    /**
     * InstanceType enum ml.c5.18xlarge
     */
    MlC518xlarge: "ml.c5.18xlarge",
    /**
     * InstanceType enum ml.c5.2xlarge
     */
    MlC52xlarge: "ml.c5.2xlarge",
    /**
     * InstanceType enum ml.c5.4xlarge
     */
    MlC54xlarge: "ml.c5.4xlarge",
    /**
     * InstanceType enum ml.c5.9xlarge
     */
    MlC59xlarge: "ml.c5.9xlarge",
    /**
     * InstanceType enum ml.c5.xlarge
     */
    MlC5Xlarge: "ml.c5.xlarge",
    /**
     * InstanceType enum ml.c5d.18xlarge
     */
    MlC5d18xlarge: "ml.c5d.18xlarge",
    /**
     * InstanceType enum ml.c5d.2xlarge
     */
    MlC5d2xlarge: "ml.c5d.2xlarge",
    /**
     * InstanceType enum ml.c5d.4xlarge
     */
    MlC5d4xlarge: "ml.c5d.4xlarge",
    /**
     * InstanceType enum ml.c5d.9xlarge
     */
    MlC5d9xlarge: "ml.c5d.9xlarge",
    /**
     * InstanceType enum ml.c5d.xlarge
     */
    MlC5dXlarge: "ml.c5d.xlarge",
    /**
     * InstanceType enum ml.c6i.12xlarge
     */
    MlC6i12xlarge: "ml.c6i.12xlarge",
    /**
     * InstanceType enum ml.c6i.16xlarge
     */
    MlC6i16xlarge: "ml.c6i.16xlarge",
    /**
     * InstanceType enum ml.c6i.24xlarge
     */
    MlC6i24xlarge: "ml.c6i.24xlarge",
    /**
     * InstanceType enum ml.c6i.2xlarge
     */
    MlC6i2xlarge: "ml.c6i.2xlarge",
    /**
     * InstanceType enum ml.c6i.32xlarge
     */
    MlC6i32xlarge: "ml.c6i.32xlarge",
    /**
     * InstanceType enum ml.c6i.4xlarge
     */
    MlC6i4xlarge: "ml.c6i.4xlarge",
    /**
     * InstanceType enum ml.c6i.8xlarge
     */
    MlC6i8xlarge: "ml.c6i.8xlarge",
    /**
     * InstanceType enum ml.c6i.large
     */
    MlC6iLarge: "ml.c6i.large",
    /**
     * InstanceType enum ml.c6i.xlarge
     */
    MlC6iXlarge: "ml.c6i.xlarge",
    /**
     * InstanceType enum ml.c6id.12xlarge
     */
    MlC6id12xlarge: "ml.c6id.12xlarge",
    /**
     * InstanceType enum ml.c6id.16xlarge
     */
    MlC6id16xlarge: "ml.c6id.16xlarge",
    /**
     * InstanceType enum ml.c6id.24xlarge
     */
    MlC6id24xlarge: "ml.c6id.24xlarge",
    /**
     * InstanceType enum ml.c6id.2xlarge
     */
    MlC6id2xlarge: "ml.c6id.2xlarge",
    /**
     * InstanceType enum ml.c6id.32xlarge
     */
    MlC6id32xlarge: "ml.c6id.32xlarge",
    /**
     * InstanceType enum ml.c6id.4xlarge
     */
    MlC6id4xlarge: "ml.c6id.4xlarge",
    /**
     * InstanceType enum ml.c6id.8xlarge
     */
    MlC6id8xlarge: "ml.c6id.8xlarge",
    /**
     * InstanceType enum ml.c6id.large
     */
    MlC6idLarge: "ml.c6id.large",
    /**
     * InstanceType enum ml.c6id.xlarge
     */
    MlC6idXlarge: "ml.c6id.xlarge",
    /**
     * InstanceType enum ml.c7i.12xlarge
     */
    MlC7i12xlarge: "ml.c7i.12xlarge",
    /**
     * InstanceType enum ml.c7i.16xlarge
     */
    MlC7i16xlarge: "ml.c7i.16xlarge",
    /**
     * InstanceType enum ml.c7i.24xlarge
     */
    MlC7i24xlarge: "ml.c7i.24xlarge",
    /**
     * InstanceType enum ml.c7i.2xlarge
     */
    MlC7i2xlarge: "ml.c7i.2xlarge",
    /**
     * InstanceType enum ml.c7i.48xlarge
     */
    MlC7i48xlarge: "ml.c7i.48xlarge",
    /**
     * InstanceType enum ml.c7i.4xlarge
     */
    MlC7i4xlarge: "ml.c7i.4xlarge",
    /**
     * InstanceType enum ml.c7i.8xlarge
     */
    MlC7i8xlarge: "ml.c7i.8xlarge",
    /**
     * InstanceType enum ml.c7i.large
     */
    MlC7iLarge: "ml.c7i.large",
    /**
     * InstanceType enum ml.c7i.xlarge
     */
    MlC7iXlarge: "ml.c7i.xlarge",
    /**
     * InstanceType enum ml.g4dn.12xlarge
     */
    MlG4dn12xlarge: "ml.g4dn.12xlarge",
    /**
     * InstanceType enum ml.g4dn.16xlarge
     */
    MlG4dn16xlarge: "ml.g4dn.16xlarge",
    /**
     * InstanceType enum ml.g4dn.2xlarge
     */
    MlG4dn2xlarge: "ml.g4dn.2xlarge",
    /**
     * InstanceType enum ml.g4dn.4xlarge
     */
    MlG4dn4xlarge: "ml.g4dn.4xlarge",
    /**
     * InstanceType enum ml.g4dn.8xlarge
     */
    MlG4dn8xlarge: "ml.g4dn.8xlarge",
    /**
     * InstanceType enum ml.g4dn.xlarge
     */
    MlG4dnXlarge: "ml.g4dn.xlarge",
    /**
     * InstanceType enum ml.g5.12xlarge
     */
    MlG512xlarge: "ml.g5.12xlarge",
    /**
     * InstanceType enum ml.g5.16xlarge
     */
    MlG516xlarge: "ml.g5.16xlarge",
    /**
     * InstanceType enum ml.g5.24xlarge
     */
    MlG524xlarge: "ml.g5.24xlarge",
    /**
     * InstanceType enum ml.g5.2xlarge
     */
    MlG52xlarge: "ml.g5.2xlarge",
    /**
     * InstanceType enum ml.g5.48xlarge
     */
    MlG548xlarge: "ml.g5.48xlarge",
    /**
     * InstanceType enum ml.g5.4xlarge
     */
    MlG54xlarge: "ml.g5.4xlarge",
    /**
     * InstanceType enum ml.g5.8xlarge
     */
    MlG58xlarge: "ml.g5.8xlarge",
    /**
     * InstanceType enum ml.g5.xlarge
     */
    MlG5Xlarge: "ml.g5.xlarge",
    /**
     * InstanceType enum ml.inf1.24xlarge
     */
    MlInf124xlarge: "ml.inf1.24xlarge",
    /**
     * InstanceType enum ml.inf1.2xlarge
     */
    MlInf12xlarge: "ml.inf1.2xlarge",
    /**
     * InstanceType enum ml.inf1.6xlarge
     */
    MlInf16xlarge: "ml.inf1.6xlarge",
    /**
     * InstanceType enum ml.inf1.xlarge
     */
    MlInf1Xlarge: "ml.inf1.xlarge",
    /**
     * InstanceType enum ml.m4.10xlarge
     */
    MlM410xlarge: "ml.m4.10xlarge",
    /**
     * InstanceType enum ml.m4.16xlarge
     */
    MlM416xlarge: "ml.m4.16xlarge",
    /**
     * InstanceType enum ml.m4.2xlarge
     */
    MlM42xlarge: "ml.m4.2xlarge",
    /**
     * InstanceType enum ml.m4.4xlarge
     */
    MlM44xlarge: "ml.m4.4xlarge",
    /**
     * InstanceType enum ml.m4.xlarge
     */
    MlM4Xlarge: "ml.m4.xlarge",
    /**
     * InstanceType enum ml.m5.12xlarge
     */
    MlM512xlarge: "ml.m5.12xlarge",
    /**
     * InstanceType enum ml.m5.24xlarge
     */
    MlM524xlarge: "ml.m5.24xlarge",
    /**
     * InstanceType enum ml.m5.2xlarge
     */
    MlM52xlarge: "ml.m5.2xlarge",
    /**
     * InstanceType enum ml.m5.4xlarge
     */
    MlM54xlarge: "ml.m5.4xlarge",
    /**
     * InstanceType enum ml.m5.xlarge
     */
    MlM5Xlarge: "ml.m5.xlarge",
    /**
     * InstanceType enum ml.m5d.12xlarge
     */
    MlM5d12xlarge: "ml.m5d.12xlarge",
    /**
     * InstanceType enum ml.m5d.16xlarge
     */
    MlM5d16xlarge: "ml.m5d.16xlarge",
    /**
     * InstanceType enum ml.m5d.24xlarge
     */
    MlM5d24xlarge: "ml.m5d.24xlarge",
    /**
     * InstanceType enum ml.m5d.2xlarge
     */
    MlM5d2xlarge: "ml.m5d.2xlarge",
    /**
     * InstanceType enum ml.m5d.4xlarge
     */
    MlM5d4xlarge: "ml.m5d.4xlarge",
    /**
     * InstanceType enum ml.m5d.8xlarge
     */
    MlM5d8xlarge: "ml.m5d.8xlarge",
    /**
     * InstanceType enum ml.m5d.large
     */
    MlM5dLarge: "ml.m5d.large",
    /**
     * InstanceType enum ml.m5d.xlarge
     */
    MlM5dXlarge: "ml.m5d.xlarge",
    /**
     * InstanceType enum ml.m6i.12xlarge
     */
    MlM6i12xlarge: "ml.m6i.12xlarge",
    /**
     * InstanceType enum ml.m6i.16xlarge
     */
    MlM6i16xlarge: "ml.m6i.16xlarge",
    /**
     * InstanceType enum ml.m6i.24xlarge
     */
    MlM6i24xlarge: "ml.m6i.24xlarge",
    /**
     * InstanceType enum ml.m6i.2xlarge
     */
    MlM6i2xlarge: "ml.m6i.2xlarge",
    /**
     * InstanceType enum ml.m6i.32xlarge
     */
    MlM6i32xlarge: "ml.m6i.32xlarge",
    /**
     * InstanceType enum ml.m6i.4xlarge
     */
    MlM6i4xlarge: "ml.m6i.4xlarge",
    /**
     * InstanceType enum ml.m6i.8xlarge
     */
    MlM6i8xlarge: "ml.m6i.8xlarge",
    /**
     * InstanceType enum ml.m6i.large
     */
    MlM6iLarge: "ml.m6i.large",
    /**
     * InstanceType enum ml.m6i.xlarge
     */
    MlM6iXlarge: "ml.m6i.xlarge",
    /**
     * InstanceType enum ml.m6id.12xlarge
     */
    MlM6id12xlarge: "ml.m6id.12xlarge",
    /**
     * InstanceType enum ml.m6id.16xlarge
     */
    MlM6id16xlarge: "ml.m6id.16xlarge",
    /**
     * InstanceType enum ml.m6id.24xlarge
     */
    MlM6id24xlarge: "ml.m6id.24xlarge",
    /**
     * InstanceType enum ml.m6id.2xlarge
     */
    MlM6id2xlarge: "ml.m6id.2xlarge",
    /**
     * InstanceType enum ml.m6id.32xlarge
     */
    MlM6id32xlarge: "ml.m6id.32xlarge",
    /**
     * InstanceType enum ml.m6id.4xlarge
     */
    MlM6id4xlarge: "ml.m6id.4xlarge",
    /**
     * InstanceType enum ml.m6id.8xlarge
     */
    MlM6id8xlarge: "ml.m6id.8xlarge",
    /**
     * InstanceType enum ml.m6id.large
     */
    MlM6idLarge: "ml.m6id.large",
    /**
     * InstanceType enum ml.m6id.xlarge
     */
    MlM6idXlarge: "ml.m6id.xlarge",
    /**
     * InstanceType enum ml.m7i.12xlarge
     */
    MlM7i12xlarge: "ml.m7i.12xlarge",
    /**
     * InstanceType enum ml.m7i.16xlarge
     */
    MlM7i16xlarge: "ml.m7i.16xlarge",
    /**
     * InstanceType enum ml.m7i.24xlarge
     */
    MlM7i24xlarge: "ml.m7i.24xlarge",
    /**
     * InstanceType enum ml.m7i.2xlarge
     */
    MlM7i2xlarge: "ml.m7i.2xlarge",
    /**
     * InstanceType enum ml.m7i.48xlarge
     */
    MlM7i48xlarge: "ml.m7i.48xlarge",
    /**
     * InstanceType enum ml.m7i.4xlarge
     */
    MlM7i4xlarge: "ml.m7i.4xlarge",
    /**
     * InstanceType enum ml.m7i.8xlarge
     */
    MlM7i8xlarge: "ml.m7i.8xlarge",
    /**
     * InstanceType enum ml.m7i.large
     */
    MlM7iLarge: "ml.m7i.large",
    /**
     * InstanceType enum ml.m7i.xlarge
     */
    MlM7iXlarge: "ml.m7i.xlarge",
    /**
     * InstanceType enum ml.p2.16xlarge
     */
    MlP216xlarge: "ml.p2.16xlarge",
    /**
     * InstanceType enum ml.p2.8xlarge
     */
    MlP28xlarge: "ml.p2.8xlarge",
    /**
     * InstanceType enum ml.p2.xlarge
     */
    MlP2Xlarge: "ml.p2.xlarge",
    /**
     * InstanceType enum ml.p3.16xlarge
     */
    MlP316xlarge: "ml.p3.16xlarge",
    /**
     * InstanceType enum ml.p3.2xlarge
     */
    MlP32xlarge: "ml.p3.2xlarge",
    /**
     * InstanceType enum ml.p3.8xlarge
     */
    MlP38xlarge: "ml.p3.8xlarge",
    /**
     * InstanceType enum ml.p3dn.24xlarge
     */
    MlP3dn24xlarge: "ml.p3dn.24xlarge",
    /**
     * InstanceType enum ml.p4d.24xlarge
     */
    MlP4d24xlarge: "ml.p4d.24xlarge",
    /**
     * InstanceType enum ml.p4de.24xlarge
     */
    MlP4de24xlarge: "ml.p4de.24xlarge",
    /**
     * InstanceType enum ml.p5.48xlarge
     */
    MlP548xlarge: "ml.p5.48xlarge",
    /**
     * InstanceType enum ml.r5.12xlarge
     */
    MlR512xlarge: "ml.r5.12xlarge",
    /**
     * InstanceType enum ml.r5.16xlarge
     */
    MlR516xlarge: "ml.r5.16xlarge",
    /**
     * InstanceType enum ml.r5.24xlarge
     */
    MlR524xlarge: "ml.r5.24xlarge",
    /**
     * InstanceType enum ml.r5.2xlarge
     */
    MlR52xlarge: "ml.r5.2xlarge",
    /**
     * InstanceType enum ml.r5.4xlarge
     */
    MlR54xlarge: "ml.r5.4xlarge",
    /**
     * InstanceType enum ml.r5.8xlarge
     */
    MlR58xlarge: "ml.r5.8xlarge",
    /**
     * InstanceType enum ml.r5.large
     */
    MlR5Large: "ml.r5.large",
    /**
     * InstanceType enum ml.r5.xlarge
     */
    MlR5Xlarge: "ml.r5.xlarge",
    /**
     * InstanceType enum ml.r6i.12xlarge
     */
    MlR6i12xlarge: "ml.r6i.12xlarge",
    /**
     * InstanceType enum ml.r6i.16xlarge
     */
    MlR6i16xlarge: "ml.r6i.16xlarge",
    /**
     * InstanceType enum ml.r6i.24xlarge
     */
    MlR6i24xlarge: "ml.r6i.24xlarge",
    /**
     * InstanceType enum ml.r6i.2xlarge
     */
    MlR6i2xlarge: "ml.r6i.2xlarge",
    /**
     * InstanceType enum ml.r6i.32xlarge
     */
    MlR6i32xlarge: "ml.r6i.32xlarge",
    /**
     * InstanceType enum ml.r6i.4xlarge
     */
    MlR6i4xlarge: "ml.r6i.4xlarge",
    /**
     * InstanceType enum ml.r6i.8xlarge
     */
    MlR6i8xlarge: "ml.r6i.8xlarge",
    /**
     * InstanceType enum ml.r6i.large
     */
    MlR6iLarge: "ml.r6i.large",
    /**
     * InstanceType enum ml.r6i.xlarge
     */
    MlR6iXlarge: "ml.r6i.xlarge",
    /**
     * InstanceType enum ml.r6id.12xlarge
     */
    MlR6id12xlarge: "ml.r6id.12xlarge",
    /**
     * InstanceType enum ml.r6id.16xlarge
     */
    MlR6id16xlarge: "ml.r6id.16xlarge",
    /**
     * InstanceType enum ml.r6id.24xlarge
     */
    MlR6id24xlarge: "ml.r6id.24xlarge",
    /**
     * InstanceType enum ml.r6id.2xlarge
     */
    MlR6id2xlarge: "ml.r6id.2xlarge",
    /**
     * InstanceType enum ml.r6id.32xlarge
     */
    MlR6id32xlarge: "ml.r6id.32xlarge",
    /**
     * InstanceType enum ml.r6id.4xlarge
     */
    MlR6id4xlarge: "ml.r6id.4xlarge",
    /**
     * InstanceType enum ml.r6id.8xlarge
     */
    MlR6id8xlarge: "ml.r6id.8xlarge",
    /**
     * InstanceType enum ml.r6id.large
     */
    MlR6idLarge: "ml.r6id.large",
    /**
     * InstanceType enum ml.r6id.xlarge
     */
    MlR6idXlarge: "ml.r6id.xlarge",
    /**
     * InstanceType enum ml.r7i.12xlarge
     */
    MlR7i12xlarge: "ml.r7i.12xlarge",
    /**
     * InstanceType enum ml.r7i.16xlarge
     */
    MlR7i16xlarge: "ml.r7i.16xlarge",
    /**
     * InstanceType enum ml.r7i.24xlarge
     */
    MlR7i24xlarge: "ml.r7i.24xlarge",
    /**
     * InstanceType enum ml.r7i.2xlarge
     */
    MlR7i2xlarge: "ml.r7i.2xlarge",
    /**
     * InstanceType enum ml.r7i.48xlarge
     */
    MlR7i48xlarge: "ml.r7i.48xlarge",
    /**
     * InstanceType enum ml.r7i.4xlarge
     */
    MlR7i4xlarge: "ml.r7i.4xlarge",
    /**
     * InstanceType enum ml.r7i.8xlarge
     */
    MlR7i8xlarge: "ml.r7i.8xlarge",
    /**
     * InstanceType enum ml.r7i.large
     */
    MlR7iLarge: "ml.r7i.large",
    /**
     * InstanceType enum ml.r7i.xlarge
     */
    MlR7iXlarge: "ml.r7i.xlarge",
    /**
     * InstanceType enum ml.t2.2xlarge
     */
    MlT22xlarge: "ml.t2.2xlarge",
    /**
     * InstanceType enum ml.t2.large
     */
    MlT2Large: "ml.t2.large",
    /**
     * InstanceType enum ml.t2.medium
     */
    MlT2Medium: "ml.t2.medium",
    /**
     * InstanceType enum ml.t2.xlarge
     */
    MlT2Xlarge: "ml.t2.xlarge",
    /**
     * InstanceType enum ml.t3.2xlarge
     */
    MlT32xlarge: "ml.t3.2xlarge",
    /**
     * InstanceType enum ml.t3.large
     */
    MlT3Large: "ml.t3.large",
    /**
     * InstanceType enum ml.t3.medium
     */
    MlT3Medium: "ml.t3.medium",
    /**
     * InstanceType enum ml.t3.xlarge
     */
    MlT3Xlarge: "ml.t3.xlarge",
} as const;

/**
 * Property value
 */
export type InstanceType = (typeof InstanceType)[keyof typeof InstanceType];

export const IntelligentTieringConfigurationStatus = {
    /**
     * IntelligentTieringConfigurationStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * IntelligentTieringConfigurationStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Specifies the status of the configuration.
 */
export type IntelligentTieringConfigurationStatus = (typeof IntelligentTieringConfigurationStatus)[keyof typeof IntelligentTieringConfigurationStatus];

export const InventoryConfigurationIncludedObjectVersions = {
    /**
     * InventoryConfigurationIncludedObjectVersions enum All
     */
    All: "All",
    /**
     * InventoryConfigurationIncludedObjectVersions enum Current
     */
    Current: "Current",
} as const;

/**
 * Object versions to include in the inventory list. If set to ``All``, the list includes all the object versions, which adds the version-related fields ``VersionId``, ``IsLatest``, and ``DeleteMarker`` to the list. If set to ``Current``, the list does not contain these version-related fields.
 */
export type InventoryConfigurationIncludedObjectVersions = (typeof InventoryConfigurationIncludedObjectVersions)[keyof typeof InventoryConfigurationIncludedObjectVersions];

export const InventoryConfigurationOptionalFields = {
    /**
     * InventoryConfigurationOptionalFields enum BucketKeyStatus
     */
    BucketKeyStatus: "BucketKeyStatus",
    /**
     * InventoryConfigurationOptionalFields enum ChecksumAlgorithm
     */
    ChecksumAlgorithm: "ChecksumAlgorithm",
    /**
     * InventoryConfigurationOptionalFields enum ETag
     */
    ETag: "ETag",
    /**
     * InventoryConfigurationOptionalFields enum EncryptionStatus
     */
    EncryptionStatus: "EncryptionStatus",
    /**
     * InventoryConfigurationOptionalFields enum IntelligentTieringAccessTier
     */
    IntelligentTieringAccessTier: "IntelligentTieringAccessTier",
    /**
     * InventoryConfigurationOptionalFields enum IsMultipartUploaded
     */
    IsMultipartUploaded: "IsMultipartUploaded",
    /**
     * InventoryConfigurationOptionalFields enum LastModifiedDate
     */
    LastModifiedDate: "LastModifiedDate",
    /**
     * InventoryConfigurationOptionalFields enum ObjectAccessControlList
     */
    ObjectAccessControlList: "ObjectAccessControlList",
    /**
     * InventoryConfigurationOptionalFields enum ObjectLockLegalHoldStatus
     */
    ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus",
    /**
     * InventoryConfigurationOptionalFields enum ObjectLockMode
     */
    ObjectLockMode: "ObjectLockMode",
    /**
     * InventoryConfigurationOptionalFields enum ObjectLockRetainUntilDate
     */
    ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate",
    /**
     * InventoryConfigurationOptionalFields enum ObjectOwner
     */
    ObjectOwner: "ObjectOwner",
    /**
     * InventoryConfigurationOptionalFields enum ReplicationStatus
     */
    ReplicationStatus: "ReplicationStatus",
    /**
     * InventoryConfigurationOptionalFields enum Size
     */
    Size: "Size",
    /**
     * InventoryConfigurationOptionalFields enum StorageClass
     */
    StorageClass: "StorageClass",
} as const;

/**
 * InventoryConfigurationOptionalFields enum
 */
export type InventoryConfigurationOptionalFields = (typeof InventoryConfigurationOptionalFields)[keyof typeof InventoryConfigurationOptionalFields];

export const InventoryConfigurationScheduleFrequency = {
    /**
     * InventoryConfigurationScheduleFrequency enum Daily
     */
    Daily: "Daily",
    /**
     * InventoryConfigurationScheduleFrequency enum Weekly
     */
    Weekly: "Weekly",
} as const;

/**
 * Specifies the schedule for generating inventory results.
 */
export type InventoryConfigurationScheduleFrequency = (typeof InventoryConfigurationScheduleFrequency)[keyof typeof InventoryConfigurationScheduleFrequency];

export const IpFamily = {
    /**
     * IpFamily enum ipv4
     */
    Ipv4: "ipv4",
    /**
     * IpFamily enum ipv6
     */
    Ipv6: "ipv6",
} as const;

/**
 * Property value
 */
export type IpFamily = (typeof IpFamily)[keyof typeof IpFamily];

export const IpamState = {
    /**
     * IpamState enum create-complete
     */
    CreateComplete: "create-complete",
    /**
     * IpamState enum create-failed
     */
    CreateFailed: "create-failed",
    /**
     * IpamState enum create-in-progress
     */
    CreateInProgress: "create-in-progress",
    /**
     * IpamState enum delete-complete
     */
    DeleteComplete: "delete-complete",
    /**
     * IpamState enum delete-failed
     */
    DeleteFailed: "delete-failed",
    /**
     * IpamState enum delete-in-progress
     */
    DeleteInProgress: "delete-in-progress",
    /**
     * IpamState enum isolate-complete
     */
    IsolateComplete: "isolate-complete",
    /**
     * IpamState enum isolate-in-progress
     */
    IsolateInProgress: "isolate-in-progress",
    /**
     * IpamState enum modify-complete
     */
    ModifyComplete: "modify-complete",
    /**
     * IpamState enum modify-failed
     */
    ModifyFailed: "modify-failed",
    /**
     * IpamState enum modify-in-progress
     */
    ModifyInProgress: "modify-in-progress",
    /**
     * IpamState enum restore-in-progress
     */
    RestoreInProgress: "restore-in-progress",
} as const;

/**
 * Property value
 */
export type IpamState = (typeof IpamState)[keyof typeof IpamState];

export const IpamTier = {
    /**
     * IpamTier enum advanced
     */
    Advanced: "advanced",
    /**
     * IpamTier enum free
     */
    Free: "free",
} as const;

/**
 * Property value
 */
export type IpamTier = (typeof IpamTier)[keyof typeof IpamTier];

export const JobComparator = {
    /**
     * JobComparator enum CONTAINS
     */
    CONTAINS: "CONTAINS",
    /**
     * JobComparator enum EQ
     */
    EQ: "EQ",
    /**
     * JobComparator enum GT
     */
    GT: "GT",
    /**
     * JobComparator enum GTE
     */
    GTE: "GTE",
    /**
     * JobComparator enum LT
     */
    LT: "LT",
    /**
     * JobComparator enum LTE
     */
    LTE: "LTE",
    /**
     * JobComparator enum NE
     */
    NE: "NE",
    /**
     * JobComparator enum STARTS_WITH
     */
    STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * Property value
 */
export type JobComparator = (typeof JobComparator)[keyof typeof JobComparator];

export const JobStatus = {
    /**
     * JobStatus enum CANCELLED
     */
    CANCELLED: "CANCELLED",
    /**
     * JobStatus enum COMPLETE
     */
    COMPLETE: "COMPLETE",
    /**
     * JobStatus enum IDLE
     */
    IDLE: "IDLE",
    /**
     * JobStatus enum PAUSED
     */
    PAUSED: "PAUSED",
    /**
     * JobStatus enum RUNNING
     */
    RUNNING: "RUNNING",
    /**
     * JobStatus enum USER_PAUSED
     */
    USER_PAUSED: "USER_PAUSED",
} as const;

/**
 * Property value
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

export const JobType = {
    /**
     * JobType enum ONE_TIME
     */
    ONE_TIME: "ONE_TIME",
    /**
     * JobType enum SCHEDULED
     */
    SCHEDULED: "SCHEDULED",
} as const;

/**
 * Property value
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

export const JoinedMethod = {
    /**
     * JoinedMethod enum CREATED
     */
    CREATED: "CREATED",
    /**
     * JoinedMethod enum INVITED
     */
    INVITED: "INVITED",
} as const;

/**
 * The method by which the account joined the organization.
 */
export type JoinedMethod = (typeof JoinedMethod)[keyof typeof JoinedMethod];

export const KeyAlgorithm = {
    /**
     * KeyAlgorithm enum EC_prime256v1
     */
    EC_prime256v1: "EC_prime256v1",
    /**
     * KeyAlgorithm enum EC_secp384r1
     */
    EC_secp384r1: "EC_secp384r1",
    /**
     * KeyAlgorithm enum EC_secp521r1
     */
    EC_secp521r1: "EC_secp521r1",
    /**
     * KeyAlgorithm enum RSA_1024
     */
    RSA_1024: "RSA_1024",
    /**
     * KeyAlgorithm enum RSA_2048
     */
    RSA_2048: "RSA_2048",
    /**
     * KeyAlgorithm enum RSA_3072
     */
    RSA_3072: "RSA_3072",
    /**
     * KeyAlgorithm enum RSA_4096
     */
    RSA_4096: "RSA_4096",
} as const;

/**
 * Property value
 */
export type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm];

export const KeyFormat = {
    /**
     * KeyFormat enum pem
     */
    Pem: "pem",
    /**
     * KeyFormat enum ppk
     */
    Ppk: "ppk",
} as const;

/**
 * The format of the key pair. Default: ``pem``
 */
export type KeyFormat = (typeof KeyFormat)[keyof typeof KeyFormat];

export const KeySpec = {
    /**
     * KeySpec enum ECC_NIST_P256
     */
    ECC_NIST_P256: "ECC_NIST_P256",
    /**
     * KeySpec enum ECC_NIST_P384
     */
    ECC_NIST_P384: "ECC_NIST_P384",
    /**
     * KeySpec enum ECC_NIST_P521
     */
    ECC_NIST_P521: "ECC_NIST_P521",
    /**
     * KeySpec enum ECC_SECG_P256K1
     */
    ECC_SECG_P256K1: "ECC_SECG_P256K1",
    /**
     * KeySpec enum HMAC_224
     */
    HMAC_224: "HMAC_224",
    /**
     * KeySpec enum HMAC_256
     */
    HMAC_256: "HMAC_256",
    /**
     * KeySpec enum HMAC_384
     */
    HMAC_384: "HMAC_384",
    /**
     * KeySpec enum HMAC_512
     */
    HMAC_512: "HMAC_512",
    /**
     * KeySpec enum RSA_2048
     */
    RSA_2048: "RSA_2048",
    /**
     * KeySpec enum RSA_3072
     */
    RSA_3072: "RSA_3072",
    /**
     * KeySpec enum RSA_4096
     */
    RSA_4096: "RSA_4096",
    /**
     * KeySpec enum SM2
     */
    SM2: "SM2",
    /**
     * KeySpec enum SYMMETRIC_DEFAULT
     */
    SYMMETRIC_DEFAULT: "SYMMETRIC_DEFAULT",
} as const;

/**
 * Specifies the type of KMS key to create. The default value, ``SYMMETRIC_DEFAULT``, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, ``SYMMETRIC_DEFAULT`` creates a 128-bit symmetric key that uses SM4 encryption. You can't change the ``KeySpec`` value after the KMS key is created. For help choosing a key spec for your KMS key, see [Choosing a KMS key type](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html) in the *Developer Guide*. The ``KeySpec`` property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see [condition keys](https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms) in the *Developer Guide*.  If you change the value of the ``KeySpec`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.    [services that are integrated with](https://docs.aws.amazon.com/kms/features/#AWS_Service_Integration) use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see [Identifying asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html) in the *Developer Guide*.   KMS supports the following key specs for KMS keys:  +  Symmetric encryption key (default)  +   ``SYMMETRIC_DEFAULT`` (AES-256-GCM)    +  HMAC keys (symmetric)  +   ``HMAC_224``   +   ``HMAC_256``   +   ``HMAC_384``   +   ``HMAC_512``     +  Asymmetric RSA key pairs  +   ``RSA_2048``   +   ``RSA_3072``   +   ``RSA_4096``     +  Asymmetric NIST-recommended elliptic curve key pairs  +   ``ECC_NIST_P256`` (secp256r1)  +   ``ECC_NIST_P384`` (secp384r1)  +   ``ECC_NIST_P521`` (secp521r1)    +  Other asymmetric elliptic curve key pairs  +   ``ECC_SECG_P256K1`` (secp256k1), commonly used for cryptocurrencies.    +  SM2 key pairs (China Regions only)  +   ``SM2``
 */
export type KeySpec = (typeof KeySpec)[keyof typeof KeySpec];

export const KeyType = {
    /**
     * KeyType enum ed25519
     */
    Ed25519: "ed25519",
    /**
     * KeyType enum rsa
     */
    Rsa: "rsa",
} as const;

/**
 * The type of key pair. Note that ED25519 keys are not supported for Windows instances. If the ``PublicKeyMaterial`` property is specified, the ``KeyType`` property is ignored, and the key type is inferred from the ``PublicKeyMaterial`` value. Default: ``rsa``
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

export const KeyUsage = {
    /**
     * KeyUsage enum ENCRYPT_DECRYPT
     */
    ENCRYPT_DECRYPT: "ENCRYPT_DECRYPT",
    /**
     * KeyUsage enum GENERATE_VERIFY_MAC
     */
    GENERATE_VERIFY_MAC: "GENERATE_VERIFY_MAC",
    /**
     * KeyUsage enum SIGN_VERIFY
     */
    SIGN_VERIFY: "SIGN_VERIFY",
} as const;

/**
 * Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is ``ENCRYPT_DECRYPT``. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the ``KeyUsage`` value after the KMS key is created.  If you change the value of the ``KeyUsage`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.  Select only one valid value.  +  For symmetric encryption KMS keys, omit the property or specify ``ENCRYPT_DECRYPT``.  +  For asymmetric KMS keys with RSA key material, specify ``ENCRYPT_DECRYPT`` or ``SIGN_VERIFY``.  +  For asymmetric KMS keys with ECC key material, specify ``SIGN_VERIFY``.  +  For asymmetric KMS keys with SM2 (China Regions only) key material, specify ``ENCRYPT_DECRYPT`` or ``SIGN_VERIFY``.  +  For HMAC KMS keys, specify ``GENERATE_VERIFY_MAC``.
 */
export type KeyUsage = (typeof KeyUsage)[keyof typeof KeyUsage];

export const KeyUsageName = {
    /**
     * KeyUsageName enum ANY
     */
    ANY: "ANY",
    /**
     * KeyUsageName enum CERTIFICATE_SIGNING
     */
    CERTIFICATE_SIGNING: "CERTIFICATE_SIGNING",
    /**
     * KeyUsageName enum CRL_SIGNING
     */
    CRL_SIGNING: "CRL_SIGNING",
    /**
     * KeyUsageName enum CUSTOM
     */
    CUSTOM: "CUSTOM",
    /**
     * KeyUsageName enum DATA_ENCIPHERMENT
     */
    DATA_ENCIPHERMENT: "DATA_ENCIPHERMENT",
    /**
     * KeyUsageName enum DECIPHER_ONLY
     */
    DECIPHER_ONLY: "DECIPHER_ONLY",
    /**
     * KeyUsageName enum DIGITAL_SIGNATURE
     */
    DIGITAL_SIGNATURE: "DIGITAL_SIGNATURE",
    /**
     * KeyUsageName enum ENCIPHER_ONLY
     */
    ENCIPHER_ONLY: "ENCIPHER_ONLY",
    /**
     * KeyUsageName enum KEY_AGREEMENT
     */
    KEY_AGREEMENT: "KEY_AGREEMENT",
    /**
     * KeyUsageName enum KEY_ENCIPHERMENT
     */
    KEY_ENCIPHERMENT: "KEY_ENCIPHERMENT",
    /**
     * KeyUsageName enum NON_REPUDIATION
     */
    NON_REPUDIATION: "NON_REPUDIATION",
} as const;

/**
 * KeyUsageName enum
 */
export type KeyUsageName = (typeof KeyUsageName)[keyof typeof KeyUsageName];

export const KinesisStreamSpecificationApproximateCreationDateTimePrecision = {
    /**
     * KinesisStreamSpecificationApproximateCreationDateTimePrecision enum MICROSECOND
     */
    MICROSECOND: "MICROSECOND",
    /**
     * KinesisStreamSpecificationApproximateCreationDateTimePrecision enum MILLISECOND
     */
    MILLISECOND: "MILLISECOND",
} as const;

/**
 * The precision for the time and date that the stream was created.
 */
export type KinesisStreamSpecificationApproximateCreationDateTimePrecision = (typeof KinesisStreamSpecificationApproximateCreationDateTimePrecision)[keyof typeof KinesisStreamSpecificationApproximateCreationDateTimePrecision];

export const LastRunErrorStatusCode = {
    /**
     * LastRunErrorStatusCode enum ERROR
     */
    ERROR: "ERROR",
    /**
     * LastRunErrorStatusCode enum NONE
     */
    NONE: "NONE",
} as const;

/**
 * Property value
 */
export type LastRunErrorStatusCode = (typeof LastRunErrorStatusCode)[keyof typeof LastRunErrorStatusCode];

export const LaunchType = {
    /**
     * LaunchType enum EC2
     */
    EC2: "EC2",
    /**
     * LaunchType enum EXTERNAL
     */
    EXTERNAL: "EXTERNAL",
    /**
     * LaunchType enum FARGATE
     */
    FARGATE: "FARGATE",
} as const;

/**
 * The launch type on which to run your service. For more information, see [Amazon ECS Launch Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

export const LogDestinationType = {
    /**
     * LogDestinationType enum cloud-watch-logs
     */
    CloudWatchLogs: "cloud-watch-logs",
    /**
     * LogDestinationType enum kinesis-data-firehose
     */
    KinesisDataFirehose: "kinesis-data-firehose",
    /**
     * LogDestinationType enum s3
     */
    S3: "s3",
} as const;

/**
 * Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3.
 */
export type LogDestinationType = (typeof LogDestinationType)[keyof typeof LogDestinationType];

export const LogGroupClass = {
    /**
     * LogGroupClass enum INFREQUENT_ACCESS
     */
    INFREQUENT_ACCESS: "INFREQUENT_ACCESS",
    /**
     * LogGroupClass enum STANDARD
     */
    STANDARD: "STANDARD",
} as const;

/**
 * Specifies the log group class for this log group. There are two classes:  +  The ``Standard`` log class supports all CWL features.  +  The ``Infrequent Access`` log class supports a subset of CWL features and incurs lower costs.   For details about the features supported by each class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
 */
export type LogGroupClass = (typeof LogGroupClass)[keyof typeof LogGroupClass];

export const LogType = {
    /**
     * LogType enum api
     */
    Api: "api",
    /**
     * LogType enum audit
     */
    Audit: "audit",
    /**
     * LogType enum authenticator
     */
    Authenticator: "authenticator",
    /**
     * LogType enum controllerManager
     */
    ControllerManager: "controllerManager",
    /**
     * LogType enum scheduler
     */
    Scheduler: "scheduler",
} as const;

/**
 * LogType enum
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

export const LoggingConfigApplicationLogLevel = {
    /**
     * LoggingConfigApplicationLogLevel enum DEBUG
     */
    DEBUG: "DEBUG",
    /**
     * LoggingConfigApplicationLogLevel enum ERROR
     */
    ERROR: "ERROR",
    /**
     * LoggingConfigApplicationLogLevel enum FATAL
     */
    FATAL: "FATAL",
    /**
     * LoggingConfigApplicationLogLevel enum INFO
     */
    INFO: "INFO",
    /**
     * LoggingConfigApplicationLogLevel enum TRACE
     */
    TRACE: "TRACE",
    /**
     * LoggingConfigApplicationLogLevel enum WARN
     */
    WARN: "WARN",
} as const;

/**
 * Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where ``TRACE`` is the highest level and ``FATAL`` is the lowest.
 */
export type LoggingConfigApplicationLogLevel = (typeof LoggingConfigApplicationLogLevel)[keyof typeof LoggingConfigApplicationLogLevel];

export const LoggingConfigLogFormat = {
    /**
     * LoggingConfigLogFormat enum JSON
     */
    JSON: "JSON",
    /**
     * LoggingConfigLogFormat enum Text
     */
    Text: "Text",
} as const;

/**
 * The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.
 */
export type LoggingConfigLogFormat = (typeof LoggingConfigLogFormat)[keyof typeof LoggingConfigLogFormat];

export const LoggingConfigProtocol = {
    /**
     * LoggingConfigProtocol enum application
     */
    Application: "application",
    /**
     * LoggingConfigProtocol enum firehose
     */
    Firehose: "firehose",
    /**
     * LoggingConfigProtocol enum http/s
     */
    HttpS: "http/s",
    /**
     * LoggingConfigProtocol enum lambda
     */
    Lambda: "lambda",
    /**
     * LoggingConfigProtocol enum sqs
     */
    Sqs: "sqs",
} as const;

/**
 * Property protocol
 */
export type LoggingConfigProtocol = (typeof LoggingConfigProtocol)[keyof typeof LoggingConfigProtocol];

export const LoggingConfigSystemLogLevel = {
    /**
     * LoggingConfigSystemLogLevel enum DEBUG
     */
    DEBUG: "DEBUG",
    /**
     * LoggingConfigSystemLogLevel enum INFO
     */
    INFO: "INFO",
    /**
     * LoggingConfigSystemLogLevel enum WARN
     */
    WARN: "WARN",
} as const;

/**
 * Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.
 */
export type LoggingConfigSystemLogLevel = (typeof LoggingConfigSystemLogLevel)[keyof typeof LoggingConfigSystemLogLevel];

export const LogsConfigStatusType = {
    /**
     * LogsConfigStatusType enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * LogsConfigStatusType enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Property value
 */
export type LogsConfigStatusType = (typeof LogsConfigStatusType)[keyof typeof LogsConfigStatusType];

export const MaximumExecutionFrequency = {
    /**
     * MaximumExecutionFrequency enum One_Hour
     */
    One_Hour: "One_Hour",
    /**
     * MaximumExecutionFrequency enum Six_Hours
     */
    Six_Hours: "Six_Hours",
    /**
     * MaximumExecutionFrequency enum Three_Hours
     */
    Three_Hours: "Three_Hours",
    /**
     * MaximumExecutionFrequency enum Twelve_Hours
     */
    Twelve_Hours: "Twelve_Hours",
    /**
     * MaximumExecutionFrequency enum TwentyFour_Hours
     */
    TwentyFour_Hours: "TwentyFour_Hours",
} as const;

/**
 * Property value
 */
export type MaximumExecutionFrequency = (typeof MaximumExecutionFrequency)[keyof typeof MaximumExecutionFrequency];

export const MetricTransformationUnit = {
    /**
     * MetricTransformationUnit enum Bits
     */
    Bits: "Bits",
    /**
     * MetricTransformationUnit enum Bits/Second
     */
    BitsSecond: "Bits/Second",
    /**
     * MetricTransformationUnit enum Bytes
     */
    Bytes: "Bytes",
    /**
     * MetricTransformationUnit enum Bytes/Second
     */
    BytesSecond: "Bytes/Second",
    /**
     * MetricTransformationUnit enum Count
     */
    Count: "Count",
    /**
     * MetricTransformationUnit enum Count/Second
     */
    CountSecond: "Count/Second",
    /**
     * MetricTransformationUnit enum Gigabits
     */
    Gigabits: "Gigabits",
    /**
     * MetricTransformationUnit enum Gigabits/Second
     */
    GigabitsSecond: "Gigabits/Second",
    /**
     * MetricTransformationUnit enum Gigabytes
     */
    Gigabytes: "Gigabytes",
    /**
     * MetricTransformationUnit enum Gigabytes/Second
     */
    GigabytesSecond: "Gigabytes/Second",
    /**
     * MetricTransformationUnit enum Kilobits
     */
    Kilobits: "Kilobits",
    /**
     * MetricTransformationUnit enum Kilobits/Second
     */
    KilobitsSecond: "Kilobits/Second",
    /**
     * MetricTransformationUnit enum Kilobytes
     */
    Kilobytes: "Kilobytes",
    /**
     * MetricTransformationUnit enum Kilobytes/Second
     */
    KilobytesSecond: "Kilobytes/Second",
    /**
     * MetricTransformationUnit enum Megabits
     */
    Megabits: "Megabits",
    /**
     * MetricTransformationUnit enum Megabits/Second
     */
    MegabitsSecond: "Megabits/Second",
    /**
     * MetricTransformationUnit enum Megabytes
     */
    Megabytes: "Megabytes",
    /**
     * MetricTransformationUnit enum Megabytes/Second
     */
    MegabytesSecond: "Megabytes/Second",
    /**
     * MetricTransformationUnit enum Microseconds
     */
    Microseconds: "Microseconds",
    /**
     * MetricTransformationUnit enum Milliseconds
     */
    Milliseconds: "Milliseconds",
    /**
     * MetricTransformationUnit enum None
     */
    None: "None",
    /**
     * MetricTransformationUnit enum Percent
     */
    Percent: "Percent",
    /**
     * MetricTransformationUnit enum Seconds
     */
    Seconds: "Seconds",
    /**
     * MetricTransformationUnit enum Terabits
     */
    Terabits: "Terabits",
    /**
     * MetricTransformationUnit enum Terabits/Second
     */
    TerabitsSecond: "Terabits/Second",
    /**
     * MetricTransformationUnit enum Terabytes
     */
    Terabytes: "Terabytes",
    /**
     * MetricTransformationUnit enum Terabytes/Second
     */
    TerabytesSecond: "Terabytes/Second",
} as const;

/**
 * The unit to assign to the metric. If you omit this, the unit is set as ``None``.
 */
export type MetricTransformationUnit = (typeof MetricTransformationUnit)[keyof typeof MetricTransformationUnit];

export const MetricsStatus = {
    /**
     * MetricsStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * MetricsStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Specifies whether the replication metrics are enabled.
 */
export type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];

export const MitigationInEffectEnum = {
    /**
     * MitigationInEffectEnum enum no
     */
    No: "no",
    /**
     * MitigationInEffectEnum enum yes
     */
    Yes: "yes",
} as const;

/**
 * Property value
 */
export type MitigationInEffectEnum = (typeof MitigationInEffectEnum)[keyof typeof MitigationInEffectEnum];

export const MonitoringState = {
    /**
     * MonitoringState enum disabled
     */
    Disabled: "disabled",
    /**
     * MonitoringState enum disabling
     */
    Disabling: "disabling",
    /**
     * MonitoringState enum enabled
     */
    Enabled: "enabled",
    /**
     * MonitoringState enum pending
     */
    Pending: "pending",
} as const;

/**
 * Property value
 */
export type MonitoringState = (typeof MonitoringState)[keyof typeof MonitoringState];

export const NetworkInterfaceStatus = {
    /**
     * NetworkInterfaceStatus enum associated
     */
    Associated: "associated",
    /**
     * NetworkInterfaceStatus enum attaching
     */
    Attaching: "attaching",
    /**
     * NetworkInterfaceStatus enum available
     */
    Available: "available",
    /**
     * NetworkInterfaceStatus enum detaching
     */
    Detaching: "detaching",
    /**
     * NetworkInterfaceStatus enum in-use
     */
    InUse: "in-use",
} as const;

/**
 * Property value
 */
export type NetworkInterfaceStatus = (typeof NetworkInterfaceStatus)[keyof typeof NetworkInterfaceStatus];

export const NetworkOrigin = {
    /**
     * NetworkOrigin enum Internet
     */
    Internet: "Internet",
    /**
     * NetworkOrigin enum VPC
     */
    VPC: "VPC",
} as const;

/**
 * Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies.
 */
export type NetworkOrigin = (typeof NetworkOrigin)[keyof typeof NetworkOrigin];

export const NoncurrentVersionTransitionStorageClass = {
    /**
     * NoncurrentVersionTransitionStorageClass enum DEEP_ARCHIVE
     */
    DEEP_ARCHIVE: "DEEP_ARCHIVE",
    /**
     * NoncurrentVersionTransitionStorageClass enum GLACIER
     */
    GLACIER: "GLACIER",
    /**
     * NoncurrentVersionTransitionStorageClass enum GLACIER_IR
     */
    GLACIER_IR: "GLACIER_IR",
    /**
     * NoncurrentVersionTransitionStorageClass enum INTELLIGENT_TIERING
     */
    INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
    /**
     * NoncurrentVersionTransitionStorageClass enum ONEZONE_IA
     */
    ONEZONE_IA: "ONEZONE_IA",
    /**
     * NoncurrentVersionTransitionStorageClass enum STANDARD_IA
     */
    STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * The class of storage used to store the object.
 */
export type NoncurrentVersionTransitionStorageClass = (typeof NoncurrentVersionTransitionStorageClass)[keyof typeof NoncurrentVersionTransitionStorageClass];

export const NotebookInstanceStatus = {
    /**
     * NotebookInstanceStatus enum Deleting
     */
    Deleting: "Deleting",
    /**
     * NotebookInstanceStatus enum Failed
     */
    Failed: "Failed",
    /**
     * NotebookInstanceStatus enum InService
     */
    InService: "InService",
    /**
     * NotebookInstanceStatus enum Pending
     */
    Pending: "Pending",
    /**
     * NotebookInstanceStatus enum Stopped
     */
    Stopped: "Stopped",
    /**
     * NotebookInstanceStatus enum Stopping
     */
    Stopping: "Stopping",
    /**
     * NotebookInstanceStatus enum Updating
     */
    Updating: "Updating",
} as const;

/**
 * Property value
 */
export type NotebookInstanceStatus = (typeof NotebookInstanceStatus)[keyof typeof NotebookInstanceStatus];

export const OpenSearchPartitionInstanceType = {
    /**
     * OpenSearchPartitionInstanceType enum c4.2xlarge.search
     */
    C42xlargeSearch: "c4.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c4.4xlarge.search
     */
    C44xlargeSearch: "c4.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c4.8xlarge.search
     */
    C48xlargeSearch: "c4.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c4.large.search
     */
    C4LargeSearch: "c4.large.search",
    /**
     * OpenSearchPartitionInstanceType enum c4.xlarge.search
     */
    C4XlargeSearch: "c4.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c5.18xlarge.search
     */
    C518xlargeSearch: "c5.18xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c5.2xlarge.search
     */
    C52xlargeSearch: "c5.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c5.4xlarge.search
     */
    C54xlargeSearch: "c5.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c5.9xlarge.search
     */
    C59xlargeSearch: "c5.9xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c5.large.search
     */
    C5LargeSearch: "c5.large.search",
    /**
     * OpenSearchPartitionInstanceType enum c5.xlarge.search
     */
    C5XlargeSearch: "c5.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c6g.12xlarge.search
     */
    C6g12xlargeSearch: "c6g.12xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c6g.2xlarge.search
     */
    C6g2xlargeSearch: "c6g.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c6g.4xlarge.search
     */
    C6g4xlargeSearch: "c6g.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c6g.8xlarge.search
     */
    C6g8xlargeSearch: "c6g.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum c6g.large.search
     */
    C6gLargeSearch: "c6g.large.search",
    /**
     * OpenSearchPartitionInstanceType enum c6g.xlarge.search
     */
    C6gXlargeSearch: "c6g.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum d2.2xlarge.search
     */
    D22xlargeSearch: "d2.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum d2.4xlarge.search
     */
    D24xlargeSearch: "d2.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum d2.8xlarge.search
     */
    D28xlargeSearch: "d2.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum d2.xlarge.search
     */
    D2XlargeSearch: "d2.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum i2.2xlarge.search
     */
    I22xlargeSearch: "i2.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum i2.xlarge.search
     */
    I2XlargeSearch: "i2.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum i3.16xlarge.search
     */
    I316xlargeSearch: "i3.16xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum i3.2xlarge.search
     */
    I32xlargeSearch: "i3.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum i3.4xlarge.search
     */
    I34xlargeSearch: "i3.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum i3.8xlarge.search
     */
    I38xlargeSearch: "i3.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum i3.large.search
     */
    I3LargeSearch: "i3.large.search",
    /**
     * OpenSearchPartitionInstanceType enum i3.xlarge.search
     */
    I3XlargeSearch: "i3.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m3.2xlarge.search
     */
    M32xlargeSearch: "m3.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m3.large.search
     */
    M3LargeSearch: "m3.large.search",
    /**
     * OpenSearchPartitionInstanceType enum m3.medium.search
     */
    M3MediumSearch: "m3.medium.search",
    /**
     * OpenSearchPartitionInstanceType enum m3.xlarge.search
     */
    M3XlargeSearch: "m3.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m4.10xlarge.search
     */
    M410xlargeSearch: "m4.10xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m4.2xlarge.search
     */
    M42xlargeSearch: "m4.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m4.4xlarge.search
     */
    M44xlargeSearch: "m4.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m4.large.search
     */
    M4LargeSearch: "m4.large.search",
    /**
     * OpenSearchPartitionInstanceType enum m4.xlarge.search
     */
    M4XlargeSearch: "m4.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m5.12xlarge.search
     */
    M512xlargeSearch: "m5.12xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m5.24xlarge.search
     */
    M524xlargeSearch: "m5.24xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m5.2xlarge.search
     */
    M52xlargeSearch: "m5.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m5.4xlarge.search
     */
    M54xlargeSearch: "m5.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m5.large.search
     */
    M5LargeSearch: "m5.large.search",
    /**
     * OpenSearchPartitionInstanceType enum m5.xlarge.search
     */
    M5XlargeSearch: "m5.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m6g.12xlarge.search
     */
    M6g12xlargeSearch: "m6g.12xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m6g.2xlarge.search
     */
    M6g2xlargeSearch: "m6g.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m6g.4xlarge.search
     */
    M6g4xlargeSearch: "m6g.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m6g.8xlarge.search
     */
    M6g8xlargeSearch: "m6g.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum m6g.large.search
     */
    M6gLargeSearch: "m6g.large.search",
    /**
     * OpenSearchPartitionInstanceType enum m6g.xlarge.search
     */
    M6gXlargeSearch: "m6g.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.12xlarge.search
     */
    Or112xlargeSearch: "or1.12xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.16xlarge.search
     */
    Or116xlargeSearch: "or1.16xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.2xlarge.search
     */
    Or12xlargeSearch: "or1.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.4xlarge.search
     */
    Or14xlargeSearch: "or1.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.8xlarge.search
     */
    Or18xlargeSearch: "or1.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.large.search
     */
    Or1LargeSearch: "or1.large.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.medium.search
     */
    Or1MediumSearch: "or1.medium.search",
    /**
     * OpenSearchPartitionInstanceType enum or1.xlarge.search
     */
    Or1XlargeSearch: "or1.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r3.2xlarge.search
     */
    R32xlargeSearch: "r3.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r3.4xlarge.search
     */
    R34xlargeSearch: "r3.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r3.8xlarge.search
     */
    R38xlargeSearch: "r3.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r3.large.search
     */
    R3LargeSearch: "r3.large.search",
    /**
     * OpenSearchPartitionInstanceType enum r3.xlarge.search
     */
    R3XlargeSearch: "r3.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r4.16xlarge.search
     */
    R416xlargeSearch: "r4.16xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r4.2xlarge.search
     */
    R42xlargeSearch: "r4.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r4.4xlarge.search
     */
    R44xlargeSearch: "r4.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r4.8xlarge.search
     */
    R48xlargeSearch: "r4.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r4.large.search
     */
    R4LargeSearch: "r4.large.search",
    /**
     * OpenSearchPartitionInstanceType enum r4.xlarge.search
     */
    R4XlargeSearch: "r4.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r5.12xlarge.search
     */
    R512xlargeSearch: "r5.12xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r5.24xlarge.search
     */
    R524xlargeSearch: "r5.24xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r5.2xlarge.search
     */
    R52xlargeSearch: "r5.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r5.4xlarge.search
     */
    R54xlargeSearch: "r5.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r5.large.search
     */
    R5LargeSearch: "r5.large.search",
    /**
     * OpenSearchPartitionInstanceType enum r5.xlarge.search
     */
    R5XlargeSearch: "r5.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6g.12xlarge.search
     */
    R6g12xlargeSearch: "r6g.12xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6g.2xlarge.search
     */
    R6g2xlargeSearch: "r6g.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6g.4xlarge.search
     */
    R6g4xlargeSearch: "r6g.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6g.8xlarge.search
     */
    R6g8xlargeSearch: "r6g.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6g.large.search
     */
    R6gLargeSearch: "r6g.large.search",
    /**
     * OpenSearchPartitionInstanceType enum r6g.xlarge.search
     */
    R6gXlargeSearch: "r6g.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6gd.12xlarge.search
     */
    R6gd12xlargeSearch: "r6gd.12xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6gd.16xlarge.search
     */
    R6gd16xlargeSearch: "r6gd.16xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6gd.2xlarge.search
     */
    R6gd2xlargeSearch: "r6gd.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6gd.4xlarge.search
     */
    R6gd4xlargeSearch: "r6gd.4xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6gd.8xlarge.search
     */
    R6gd8xlargeSearch: "r6gd.8xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum r6gd.large.search
     */
    R6gdLargeSearch: "r6gd.large.search",
    /**
     * OpenSearchPartitionInstanceType enum r6gd.xlarge.search
     */
    R6gdXlargeSearch: "r6gd.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum t2.medium.search
     */
    T2MediumSearch: "t2.medium.search",
    /**
     * OpenSearchPartitionInstanceType enum t2.micro.search
     */
    T2MicroSearch: "t2.micro.search",
    /**
     * OpenSearchPartitionInstanceType enum t2.small.search
     */
    T2SmallSearch: "t2.small.search",
    /**
     * OpenSearchPartitionInstanceType enum t3.2xlarge.search
     */
    T32xlargeSearch: "t3.2xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum t3.large.search
     */
    T3LargeSearch: "t3.large.search",
    /**
     * OpenSearchPartitionInstanceType enum t3.medium.search
     */
    T3MediumSearch: "t3.medium.search",
    /**
     * OpenSearchPartitionInstanceType enum t3.micro.search
     */
    T3MicroSearch: "t3.micro.search",
    /**
     * OpenSearchPartitionInstanceType enum t3.nano.search
     */
    T3NanoSearch: "t3.nano.search",
    /**
     * OpenSearchPartitionInstanceType enum t3.small.search
     */
    T3SmallSearch: "t3.small.search",
    /**
     * OpenSearchPartitionInstanceType enum t3.xlarge.search
     */
    T3XlargeSearch: "t3.xlarge.search",
    /**
     * OpenSearchPartitionInstanceType enum t4g.medium.search
     */
    T4gMediumSearch: "t4g.medium.search",
    /**
     * OpenSearchPartitionInstanceType enum t4g.small.search
     */
    T4gSmallSearch: "t4g.small.search",
    /**
     * OpenSearchPartitionInstanceType enum ultrawarm1.large.search
     */
    Ultrawarm1LargeSearch: "ultrawarm1.large.search",
    /**
     * OpenSearchPartitionInstanceType enum ultrawarm1.medium.search
     */
    Ultrawarm1MediumSearch: "ultrawarm1.medium.search",
    /**
     * OpenSearchPartitionInstanceType enum ultrawarm1.xlarge.search
     */
    Ultrawarm1XlargeSearch: "ultrawarm1.xlarge.search",
} as const;

/**
 * Property value
 */
export type OpenSearchPartitionInstanceType = (typeof OpenSearchPartitionInstanceType)[keyof typeof OpenSearchPartitionInstanceType];

export const OpenSearchWarmPartitionInstanceType = {
    /**
     * OpenSearchWarmPartitionInstanceType enum ultrawarm1.large.search
     */
    Ultrawarm1LargeSearch: "ultrawarm1.large.search",
    /**
     * OpenSearchWarmPartitionInstanceType enum ultrawarm1.medium.search
     */
    Ultrawarm1MediumSearch: "ultrawarm1.medium.search",
    /**
     * OpenSearchWarmPartitionInstanceType enum ultrawarm1.xlarge.search
     */
    Ultrawarm1XlargeSearch: "ultrawarm1.xlarge.search",
} as const;

/**
 * Property value
 */
export type OpenSearchWarmPartitionInstanceType = (typeof OpenSearchWarmPartitionInstanceType)[keyof typeof OpenSearchWarmPartitionInstanceType];

export const OperationLevelMetricsConfig = {
    /**
     * OperationLevelMetricsConfig enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * OperationLevelMetricsConfig enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Property value
 */
export type OperationLevelMetricsConfig = (typeof OperationLevelMetricsConfig)[keyof typeof OperationLevelMetricsConfig];

export const OperationPreferencesRegionConcurrencyType = {
    /**
     * OperationPreferencesRegionConcurrencyType enum PARALLEL
     */
    PARALLEL: "PARALLEL",
    /**
     * OperationPreferencesRegionConcurrencyType enum SEQUENTIAL
     */
    SEQUENTIAL: "SEQUENTIAL",
} as const;

/**
 * The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time
 */
export type OperationPreferencesRegionConcurrencyType = (typeof OperationPreferencesRegionConcurrencyType)[keyof typeof OperationPreferencesRegionConcurrencyType];

export const Origin = {
    /**
     * Origin enum AWS_KMS
     */
    AWS_KMS: "AWS_KMS",
    /**
     * Origin enum EXTERNAL
     */
    EXTERNAL: "EXTERNAL",
} as const;

/**
 * The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is ``AWS_KMS``, which means that KMS creates the key material. To [create a KMS key with no key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html) (for imported key material), set this value to ``EXTERNAL``. For more information about importing key material into KMS, see [Importing Key Material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the *Developer Guide*. You can ignore ``ENABLED`` when Origin is ``EXTERNAL``. When a KMS key with Origin ``EXTERNAL`` is created, the key state is ``PENDING_IMPORT`` and ``ENABLED`` is ``false``. After you import the key material, ``ENABLED`` updated to ``true``. The KMS key can then be used for Cryptographic Operations.    CFN doesn't support creating an ``Origin`` parameter of the ``AWS_CLOUDHSM`` or ``EXTERNAL_KEY_STORE`` values.
 */
export type Origin = (typeof Origin)[keyof typeof Origin];

export const OwnershipControlsRuleObjectOwnership = {
    /**
     * OwnershipControlsRuleObjectOwnership enum BucketOwnerEnforced
     */
    BucketOwnerEnforced: "BucketOwnerEnforced",
    /**
     * OwnershipControlsRuleObjectOwnership enum BucketOwnerPreferred
     */
    BucketOwnerPreferred: "BucketOwnerPreferred",
    /**
     * OwnershipControlsRuleObjectOwnership enum ObjectWriter
     */
    ObjectWriter: "ObjectWriter",
} as const;

/**
 * Specifies an object ownership rule.
 */
export type OwnershipControlsRuleObjectOwnership = (typeof OwnershipControlsRuleObjectOwnership)[keyof typeof OwnershipControlsRuleObjectOwnership];

export const PackageType = {
    /**
     * PackageType enum Image
     */
    Image: "Image",
    /**
     * PackageType enum Zip
     */
    Zip: "Zip",
} as const;

/**
 * The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

export const PartitionedPrefixPartitionDateSource = {
    /**
     * PartitionedPrefixPartitionDateSource enum DeliveryTime
     */
    DeliveryTime: "DeliveryTime",
    /**
     * PartitionedPrefixPartitionDateSource enum EventTime
     */
    EventTime: "EventTime",
} as const;

/**
 * Specifies the partition date source for the partitioned prefix. PartitionDateSource can be EventTime or DeliveryTime.
 */
export type PartitionedPrefixPartitionDateSource = (typeof PartitionedPrefixPartitionDateSource)[keyof typeof PartitionedPrefixPartitionDateSource];

export const Permission = {
    /**
     * Permission enum FULL_CONTROL
     */
    FULL_CONTROL: "FULL_CONTROL",
    /**
     * Permission enum READ
     */
    READ: "READ",
    /**
     * Permission enum READ_ACP
     */
    READ_ACP: "READ_ACP",
    /**
     * Permission enum WRITE
     */
    WRITE: "WRITE",
    /**
     * Permission enum WRITE_ACP
     */
    WRITE_ACP: "WRITE_ACP",
} as const;

/**
 * Property value
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

export const PermissionModel = {
    /**
     * PermissionModel enum SELF_MANAGED
     */
    SELF_MANAGED: "SELF_MANAGED",
    /**
     * PermissionModel enum SERVICE_MANAGED
     */
    SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;

/**
 * Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.
 */
export type PermissionModel = (typeof PermissionModel)[keyof typeof PermissionModel];

export const PingStatus = {
    /**
     * PingStatus enum ConnectionLost
     */
    ConnectionLost: "ConnectionLost",
    /**
     * PingStatus enum Inactive
     */
    Inactive: "Inactive",
    /**
     * PingStatus enum Online
     */
    Online: "Online",
} as const;

/**
 * Property value
 */
export type PingStatus = (typeof PingStatus)[keyof typeof PingStatus];

export const PlacementConstraintType = {
    /**
     * PlacementConstraintType enum distinctInstance
     */
    DistinctInstance: "distinctInstance",
    /**
     * PlacementConstraintType enum memberOf
     */
    MemberOf: "memberOf",
} as const;

/**
 * The type of constraint. Use ``distinctInstance`` to ensure that each task in a particular group is running on a different container instance. Use ``memberOf`` to restrict the selection to a group of valid candidates.
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];

export const PlacementGroupStrategy = {
    /**
     * PlacementGroupStrategy enum CLUSTER
     */
    CLUSTER: "CLUSTER",
    /**
     * PlacementGroupStrategy enum NONE
     */
    NONE: "NONE",
    /**
     * PlacementGroupStrategy enum PARTITION
     */
    PARTITION: "PARTITION",
    /**
     * PlacementGroupStrategy enum SPREAD
     */
    SPREAD: "SPREAD",
} as const;

/**
 * Property value
 */
export type PlacementGroupStrategy = (typeof PlacementGroupStrategy)[keyof typeof PlacementGroupStrategy];

export const PlacementStrategyType = {
    /**
     * PlacementStrategyType enum binpack
     */
    Binpack: "binpack",
    /**
     * PlacementStrategyType enum random
     */
    Random: "random",
    /**
     * PlacementStrategyType enum spread
     */
    Spread: "spread",
} as const;

/**
 * The type of placement strategy. The ``random`` placement strategy randomly places tasks on available candidates. The ``spread`` placement strategy spreads placement across available candidates evenly based on the ``field`` parameter. The ``binpack`` strategy places tasks on available candidates that have the least available amount of the resource that's specified with the ``field`` parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory but still enough to run the task.
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];

export const PlatformType = {
    /**
     * PlatformType enum Linux
     */
    Linux: "Linux",
    /**
     * PlatformType enum MacOS
     */
    MacOS: "MacOS",
    /**
     * PlatformType enum Windows
     */
    Windows: "Windows",
} as const;

/**
 * Property value
 */
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

export const PlatformValues = {
    /**
     * PlatformValues enum Windows
     */
    Windows: "Windows",
} as const;

/**
 * Property value
 */
export type PlatformValues = (typeof PlatformValues)[keyof typeof PlatformValues];

export const PointInTimeRecoveryStatus = {
    /**
     * PointInTimeRecoveryStatus enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * PointInTimeRecoveryStatus enum ENABLED
     */
    ENABLED: "ENABLED",
} as const;

/**
 * Property value
 */
export type PointInTimeRecoveryStatus = (typeof PointInTimeRecoveryStatus)[keyof typeof PointInTimeRecoveryStatus];

export const PortMappingAppProtocol = {
    /**
     * PortMappingAppProtocol enum grpc
     */
    Grpc: "grpc",
    /**
     * PortMappingAppProtocol enum http
     */
    Http: "http",
    /**
     * PortMappingAppProtocol enum http2
     */
    Http2: "http2",
} as const;

/**
 * The application protocol that's used for the port mapping. This parameter only applies to Service Connect. We recommend that you set this parameter to be consistent with the protocol that your application uses. If you set this parameter, Amazon ECS adds protocol-specific connection handling to the Service Connect proxy. If you set this parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch. If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't add protocol-specific telemetry for TCP.  ``appProtocol`` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 */
export type PortMappingAppProtocol = (typeof PortMappingAppProtocol)[keyof typeof PortMappingAppProtocol];

export const ProcessorFeatureName = {
    /**
     * ProcessorFeatureName enum coreCount
     */
    CoreCount: "coreCount",
    /**
     * ProcessorFeatureName enum threadsPerCore
     */
    ThreadsPerCore: "threadsPerCore",
} as const;

/**
 * The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``.
 */
export type ProcessorFeatureName = (typeof ProcessorFeatureName)[keyof typeof ProcessorFeatureName];

export const ProductCodeValues = {
    /**
     * ProductCodeValues enum devpay
     */
    Devpay: "devpay",
    /**
     * ProductCodeValues enum marketplace
     */
    Marketplace: "marketplace",
} as const;

/**
 * Property value
 */
export type ProductCodeValues = (typeof ProductCodeValues)[keyof typeof ProductCodeValues];

export const ProjectVisibilityType = {
    /**
     * ProjectVisibilityType enum PRIVATE
     */
    PRIVATE: "PRIVATE",
    /**
     * ProjectVisibilityType enum PUBLIC_READ
     */
    PUBLIC_READ: "PUBLIC_READ",
} as const;

/**
 * Property value
 */
export type ProjectVisibilityType = (typeof ProjectVisibilityType)[keyof typeof ProjectVisibilityType];

export const PropagateTags = {
    /**
     * PropagateTags enum SERVICE
     */
    SERVICE: "SERVICE",
    /**
     * PropagateTags enum TASK_DEFINITION
     */
    TASK_DEFINITION: "TASK_DEFINITION",
} as const;

/**
 * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action. The default is ``NONE``.
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];

export const PropertyValueType = {
    /**
     * PropertyValueType enum PLAIN_TEXT
     */
    PLAIN_TEXT: "PLAIN_TEXT",
    /**
     * PropertyValueType enum STRINGIFIED_JSON
     */
    STRINGIFIED_JSON: "STRINGIFIED_JSON",
} as const;

/**
 * Property value
 */
export type PropertyValueType = (typeof PropertyValueType)[keyof typeof PropertyValueType];

export const RRType = {
    /**
     * RRType enum A
     */
    A: "A",
    /**
     * RRType enum AAAA
     */
    AAAA: "AAAA",
    /**
     * RRType enum CAA
     */
    CAA: "CAA",
    /**
     * RRType enum CNAME
     */
    CNAME: "CNAME",
    /**
     * RRType enum DS
     */
    DS: "DS",
    /**
     * RRType enum MX
     */
    MX: "MX",
    /**
     * RRType enum NAPTR
     */
    NAPTR: "NAPTR",
    /**
     * RRType enum NS
     */
    NS: "NS",
    /**
     * RRType enum PTR
     */
    PTR: "PTR",
    /**
     * RRType enum SOA
     */
    SOA: "SOA",
    /**
     * RRType enum SPF
     */
    SPF: "SPF",
    /**
     * RRType enum SRV
     */
    SRV: "SRV",
    /**
     * RRType enum TXT
     */
    TXT: "TXT",
} as const;

/**
 * Property value
 */
export type RRType = (typeof RRType)[keyof typeof RRType];

export const RecorderStatus = {
    /**
     * RecorderStatus enum Failure
     */
    Failure: "Failure",
    /**
     * RecorderStatus enum Pending
     */
    Pending: "Pending",
    /**
     * RecorderStatus enum Success
     */
    Success: "Success",
} as const;

/**
 * Property value
 */
export type RecorderStatus = (typeof RecorderStatus)[keyof typeof RecorderStatus];

export const RecordingFrequency = {
    /**
     * RecordingFrequency enum CONTINUOUS
     */
    CONTINUOUS: "CONTINUOUS",
    /**
     * RecordingFrequency enum DAILY
     */
    DAILY: "DAILY",
} as const;

/**
 * Property value
 */
export type RecordingFrequency = (typeof RecordingFrequency)[keyof typeof RecordingFrequency];

export const RecordingStrategyType = {
    /**
     * RecordingStrategyType enum ALL_SUPPORTED_RESOURCE_TYPES
     */
    ALL_SUPPORTED_RESOURCE_TYPES: "ALL_SUPPORTED_RESOURCE_TYPES",
    /**
     * RecordingStrategyType enum EXCLUSION_BY_RESOURCE_TYPES
     */
    EXCLUSION_BY_RESOURCE_TYPES: "EXCLUSION_BY_RESOURCE_TYPES",
    /**
     * RecordingStrategyType enum INCLUSION_BY_RESOURCE_TYPES
     */
    INCLUSION_BY_RESOURCE_TYPES: "INCLUSION_BY_RESOURCE_TYPES",
} as const;

/**
 * Property value
 */
export type RecordingStrategyType = (typeof RecordingStrategyType)[keyof typeof RecordingStrategyType];

export const RedirectAllRequestsToProtocol = {
    /**
     * RedirectAllRequestsToProtocol enum http
     */
    Http: "http",
    /**
     * RedirectAllRequestsToProtocol enum https
     */
    Https: "https",
} as const;

/**
 * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
 */
export type RedirectAllRequestsToProtocol = (typeof RedirectAllRequestsToProtocol)[keyof typeof RedirectAllRequestsToProtocol];

export const RedirectRuleProtocol = {
    /**
     * RedirectRuleProtocol enum http
     */
    Http: "http",
    /**
     * RedirectRuleProtocol enum https
     */
    Https: "https",
} as const;

/**
 * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
 */
export type RedirectRuleProtocol = (typeof RedirectRuleProtocol)[keyof typeof RedirectRuleProtocol];

export const RenewalEligibility = {
    /**
     * RenewalEligibility enum ELIGIBLE
     */
    ELIGIBLE: "ELIGIBLE",
    /**
     * RenewalEligibility enum INELIGIBLE
     */
    INELIGIBLE: "INELIGIBLE",
} as const;

/**
 * Property value
 */
export type RenewalEligibility = (typeof RenewalEligibility)[keyof typeof RenewalEligibility];

export const ReplicaModificationsStatus = {
    /**
     * ReplicaModificationsStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * ReplicaModificationsStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Specifies whether Amazon S3 replicates modifications on replicas.  *Allowed values*: ``Enabled`` | ``Disabled``
 */
export type ReplicaModificationsStatus = (typeof ReplicaModificationsStatus)[keyof typeof ReplicaModificationsStatus];

export const ReplicationDestinationStorageClass = {
    /**
     * ReplicationDestinationStorageClass enum DEEP_ARCHIVE
     */
    DEEP_ARCHIVE: "DEEP_ARCHIVE",
    /**
     * ReplicationDestinationStorageClass enum GLACIER
     */
    GLACIER: "GLACIER",
    /**
     * ReplicationDestinationStorageClass enum GLACIER_IR
     */
    GLACIER_IR: "GLACIER_IR",
    /**
     * ReplicationDestinationStorageClass enum INTELLIGENT_TIERING
     */
    INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
    /**
     * ReplicationDestinationStorageClass enum ONEZONE_IA
     */
    ONEZONE_IA: "ONEZONE_IA",
    /**
     * ReplicationDestinationStorageClass enum REDUCED_REDUNDANCY
     */
    REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
    /**
     * ReplicationDestinationStorageClass enum STANDARD
     */
    STANDARD: "STANDARD",
    /**
     * ReplicationDestinationStorageClass enum STANDARD_IA
     */
    STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica.  For valid values, see the ``StorageClass`` element of the [PUT Bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) action in the *Amazon S3 API Reference*.
 */
export type ReplicationDestinationStorageClass = (typeof ReplicationDestinationStorageClass)[keyof typeof ReplicationDestinationStorageClass];

export const ReplicationRuleStatus = {
    /**
     * ReplicationRuleStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * ReplicationRuleStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Specifies whether the rule is enabled.
 */
export type ReplicationRuleStatus = (typeof ReplicationRuleStatus)[keyof typeof ReplicationRuleStatus];

export const ReplicationTimeStatus = {
    /**
     * ReplicationTimeStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * ReplicationTimeStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Specifies whether the replication time is enabled.
 */
export type ReplicationTimeStatus = (typeof ReplicationTimeStatus)[keyof typeof ReplicationTimeStatus];

export const RepoUpgradeOnBoot = {
    /**
     * RepoUpgradeOnBoot enum NONE
     */
    NONE: "NONE",
    /**
     * RepoUpgradeOnBoot enum SECURITY
     */
    SECURITY: "SECURITY",
} as const;

/**
 * Property value
 */
export type RepoUpgradeOnBoot = (typeof RepoUpgradeOnBoot)[keyof typeof RepoUpgradeOnBoot];

export const ResolverLevelMetricsBehavior = {
    /**
     * ResolverLevelMetricsBehavior enum FULL_REQUEST_RESOLVER_METRICS
     */
    FULL_REQUEST_RESOLVER_METRICS: "FULL_REQUEST_RESOLVER_METRICS",
    /**
     * ResolverLevelMetricsBehavior enum PER_RESOLVER_METRICS
     */
    PER_RESOLVER_METRICS: "PER_RESOLVER_METRICS",
} as const;

/**
 * Property value
 */
export type ResolverLevelMetricsBehavior = (typeof ResolverLevelMetricsBehavior)[keyof typeof ResolverLevelMetricsBehavior];

export const ResourceRecordSetFailover = {
    /**
     * ResourceRecordSetFailover enum PRIMARY
     */
    PRIMARY: "PRIMARY",
    /**
     * ResourceRecordSetFailover enum SECONDARY
     */
    SECONDARY: "SECONDARY",
} as const;

/**
 * Property value
 */
export type ResourceRecordSetFailover = (typeof ResourceRecordSetFailover)[keyof typeof ResourceRecordSetFailover];

export const ResourceRecordSetRegion = {
    /**
     * ResourceRecordSetRegion enum af-south-1
     */
    AfSouth1: "af-south-1",
    /**
     * ResourceRecordSetRegion enum ap-east-1
     */
    ApEast1: "ap-east-1",
    /**
     * ResourceRecordSetRegion enum ap-northeast-1
     */
    ApNortheast1: "ap-northeast-1",
    /**
     * ResourceRecordSetRegion enum ap-northeast-2
     */
    ApNortheast2: "ap-northeast-2",
    /**
     * ResourceRecordSetRegion enum ap-northeast-3
     */
    ApNortheast3: "ap-northeast-3",
    /**
     * ResourceRecordSetRegion enum ap-south-1
     */
    ApSouth1: "ap-south-1",
    /**
     * ResourceRecordSetRegion enum ap-south-2
     */
    ApSouth2: "ap-south-2",
    /**
     * ResourceRecordSetRegion enum ap-southeast-1
     */
    ApSoutheast1: "ap-southeast-1",
    /**
     * ResourceRecordSetRegion enum ap-southeast-2
     */
    ApSoutheast2: "ap-southeast-2",
    /**
     * ResourceRecordSetRegion enum ap-southeast-3
     */
    ApSoutheast3: "ap-southeast-3",
    /**
     * ResourceRecordSetRegion enum ap-southeast-4
     */
    ApSoutheast4: "ap-southeast-4",
    /**
     * ResourceRecordSetRegion enum ca-central-1
     */
    CaCentral1: "ca-central-1",
    /**
     * ResourceRecordSetRegion enum ca-west-1
     */
    CaWest1: "ca-west-1",
    /**
     * ResourceRecordSetRegion enum cn-north-1
     */
    CnNorth1: "cn-north-1",
    /**
     * ResourceRecordSetRegion enum cn-northwest-1
     */
    CnNorthwest1: "cn-northwest-1",
    /**
     * ResourceRecordSetRegion enum eu-central-1
     */
    EuCentral1: "eu-central-1",
    /**
     * ResourceRecordSetRegion enum eu-central-2
     */
    EuCentral2: "eu-central-2",
    /**
     * ResourceRecordSetRegion enum eu-north-1
     */
    EuNorth1: "eu-north-1",
    /**
     * ResourceRecordSetRegion enum eu-south-1
     */
    EuSouth1: "eu-south-1",
    /**
     * ResourceRecordSetRegion enum eu-south-2
     */
    EuSouth2: "eu-south-2",
    /**
     * ResourceRecordSetRegion enum eu-west-1
     */
    EuWest1: "eu-west-1",
    /**
     * ResourceRecordSetRegion enum eu-west-2
     */
    EuWest2: "eu-west-2",
    /**
     * ResourceRecordSetRegion enum eu-west-3
     */
    EuWest3: "eu-west-3",
    /**
     * ResourceRecordSetRegion enum il-central-1
     */
    IlCentral1: "il-central-1",
    /**
     * ResourceRecordSetRegion enum me-central-1
     */
    MeCentral1: "me-central-1",
    /**
     * ResourceRecordSetRegion enum me-south-1
     */
    MeSouth1: "me-south-1",
    /**
     * ResourceRecordSetRegion enum sa-east-1
     */
    SaEast1: "sa-east-1",
    /**
     * ResourceRecordSetRegion enum us-east-1
     */
    UsEast1: "us-east-1",
    /**
     * ResourceRecordSetRegion enum us-east-2
     */
    UsEast2: "us-east-2",
    /**
     * ResourceRecordSetRegion enum us-west-1
     */
    UsWest1: "us-west-1",
    /**
     * ResourceRecordSetRegion enum us-west-2
     */
    UsWest2: "us-west-2",
} as const;

/**
 * Property value
 */
export type ResourceRecordSetRegion = (typeof ResourceRecordSetRegion)[keyof typeof ResourceRecordSetRegion];

export const ResourceSpecInstanceType = {
    /**
     * ResourceSpecInstanceType enum ml.c5.12xlarge
     */
    MlC512xlarge: "ml.c5.12xlarge",
    /**
     * ResourceSpecInstanceType enum ml.c5.18xlarge
     */
    MlC518xlarge: "ml.c5.18xlarge",
    /**
     * ResourceSpecInstanceType enum ml.c5.24xlarge
     */
    MlC524xlarge: "ml.c5.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.c5.2xlarge
     */
    MlC52xlarge: "ml.c5.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.c5.4xlarge
     */
    MlC54xlarge: "ml.c5.4xlarge",
    /**
     * ResourceSpecInstanceType enum ml.c5.9xlarge
     */
    MlC59xlarge: "ml.c5.9xlarge",
    /**
     * ResourceSpecInstanceType enum ml.c5.large
     */
    MlC5Large: "ml.c5.large",
    /**
     * ResourceSpecInstanceType enum ml.c5.xlarge
     */
    MlC5Xlarge: "ml.c5.xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g4dn.12xlarge
     */
    MlG4dn12xlarge: "ml.g4dn.12xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g4dn.16xlarge
     */
    MlG4dn16xlarge: "ml.g4dn.16xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g4dn.2xlarge
     */
    MlG4dn2xlarge: "ml.g4dn.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g4dn.4xlarge
     */
    MlG4dn4xlarge: "ml.g4dn.4xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g4dn.8xlarge
     */
    MlG4dn8xlarge: "ml.g4dn.8xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g4dn.xlarge
     */
    MlG4dnXlarge: "ml.g4dn.xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.12xlarge
     */
    MlG512xlarge: "ml.g5.12xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.16xlarge
     */
    MlG516xlarge: "ml.g5.16xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.24xlarge
     */
    MlG524xlarge: "ml.g5.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.2xlarge
     */
    MlG52xlarge: "ml.g5.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.48xlarge
     */
    MlG548xlarge: "ml.g5.48xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.4xlarge
     */
    MlG54xlarge: "ml.g5.4xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.8xlarge
     */
    MlG58xlarge: "ml.g5.8xlarge",
    /**
     * ResourceSpecInstanceType enum ml.g5.xlarge
     */
    MlG5Xlarge: "ml.g5.xlarge",
    /**
     * ResourceSpecInstanceType enum ml.geospatial.interactive
     */
    MlGeospatialInteractive: "ml.geospatial.interactive",
    /**
     * ResourceSpecInstanceType enum ml.m5.12xlarge
     */
    MlM512xlarge: "ml.m5.12xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5.16xlarge
     */
    MlM516xlarge: "ml.m5.16xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5.24xlarge
     */
    MlM524xlarge: "ml.m5.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5.2xlarge
     */
    MlM52xlarge: "ml.m5.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5.4xlarge
     */
    MlM54xlarge: "ml.m5.4xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5.8xlarge
     */
    MlM58xlarge: "ml.m5.8xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5.large
     */
    MlM5Large: "ml.m5.large",
    /**
     * ResourceSpecInstanceType enum ml.m5.xlarge
     */
    MlM5Xlarge: "ml.m5.xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5d.12xlarge
     */
    MlM5d12xlarge: "ml.m5d.12xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5d.16xlarge
     */
    MlM5d16xlarge: "ml.m5d.16xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5d.24xlarge
     */
    MlM5d24xlarge: "ml.m5d.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5d.2xlarge
     */
    MlM5d2xlarge: "ml.m5d.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5d.4xlarge
     */
    MlM5d4xlarge: "ml.m5d.4xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5d.8xlarge
     */
    MlM5d8xlarge: "ml.m5d.8xlarge",
    /**
     * ResourceSpecInstanceType enum ml.m5d.large
     */
    MlM5dLarge: "ml.m5d.large",
    /**
     * ResourceSpecInstanceType enum ml.m5d.xlarge
     */
    MlM5dXlarge: "ml.m5d.xlarge",
    /**
     * ResourceSpecInstanceType enum ml.p3.16xlarge
     */
    MlP316xlarge: "ml.p3.16xlarge",
    /**
     * ResourceSpecInstanceType enum ml.p3.2xlarge
     */
    MlP32xlarge: "ml.p3.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.p3.8xlarge
     */
    MlP38xlarge: "ml.p3.8xlarge",
    /**
     * ResourceSpecInstanceType enum ml.p3dn.24xlarge
     */
    MlP3dn24xlarge: "ml.p3dn.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.p4d.24xlarge
     */
    MlP4d24xlarge: "ml.p4d.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.p4de.24xlarge
     */
    MlP4de24xlarge: "ml.p4de.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.r5.12xlarge
     */
    MlR512xlarge: "ml.r5.12xlarge",
    /**
     * ResourceSpecInstanceType enum ml.r5.16xlarge
     */
    MlR516xlarge: "ml.r5.16xlarge",
    /**
     * ResourceSpecInstanceType enum ml.r5.24xlarge
     */
    MlR524xlarge: "ml.r5.24xlarge",
    /**
     * ResourceSpecInstanceType enum ml.r5.2xlarge
     */
    MlR52xlarge: "ml.r5.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.r5.4xlarge
     */
    MlR54xlarge: "ml.r5.4xlarge",
    /**
     * ResourceSpecInstanceType enum ml.r5.8xlarge
     */
    MlR58xlarge: "ml.r5.8xlarge",
    /**
     * ResourceSpecInstanceType enum ml.r5.large
     */
    MlR5Large: "ml.r5.large",
    /**
     * ResourceSpecInstanceType enum ml.r5.xlarge
     */
    MlR5Xlarge: "ml.r5.xlarge",
    /**
     * ResourceSpecInstanceType enum ml.t3.2xlarge
     */
    MlT32xlarge: "ml.t3.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.t3.large
     */
    MlT3Large: "ml.t3.large",
    /**
     * ResourceSpecInstanceType enum ml.t3.medium
     */
    MlT3Medium: "ml.t3.medium",
    /**
     * ResourceSpecInstanceType enum ml.t3.micro
     */
    MlT3Micro: "ml.t3.micro",
    /**
     * ResourceSpecInstanceType enum ml.t3.small
     */
    MlT3Small: "ml.t3.small",
    /**
     * ResourceSpecInstanceType enum ml.t3.xlarge
     */
    MlT3Xlarge: "ml.t3.xlarge",
    /**
     * ResourceSpecInstanceType enum ml.trn1.2xlarge
     */
    MlTrn12xlarge: "ml.trn1.2xlarge",
    /**
     * ResourceSpecInstanceType enum ml.trn1.32xlarge
     */
    MlTrn132xlarge: "ml.trn1.32xlarge",
    /**
     * ResourceSpecInstanceType enum ml.trn1n.32xlarge
     */
    MlTrn1n32xlarge: "ml.trn1n.32xlarge",
    /**
     * ResourceSpecInstanceType enum system
     */
    System: "system",
} as const;

/**
 * The instance type that the image version runs on.
 */
export type ResourceSpecInstanceType = (typeof ResourceSpecInstanceType)[keyof typeof ResourceSpecInstanceType];

export const ResourceType = {
    /**
     * ResourceType enum EC2Instance
     */
    EC2Instance: "EC2Instance",
    /**
     * ResourceType enum ManagedInstance
     */
    ManagedInstance: "ManagedInstance",
} as const;

/**
 * Property value
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

export const RuleStatus = {
    /**
     * RuleStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * RuleStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * If ``Enabled``, the rule is currently being applied. If ``Disabled``, the rule is not currently being applied.
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

export const RulesSourceListGeneratedRulesType = {
    /**
     * RulesSourceListGeneratedRulesType enum ALLOWLIST
     */
    ALLOWLIST: "ALLOWLIST",
    /**
     * RulesSourceListGeneratedRulesType enum DENYLIST
     */
    DENYLIST: "DENYLIST",
} as const;

/**
 * Property generatedRulesType
 */
export type RulesSourceListGeneratedRulesType = (typeof RulesSourceListGeneratedRulesType)[keyof typeof RulesSourceListGeneratedRulesType];

export const RuntimeManagementConfigUpdateRuntimeOn = {
    /**
     * RuntimeManagementConfigUpdateRuntimeOn enum Auto
     */
    Auto: "Auto",
    /**
     * RuntimeManagementConfigUpdateRuntimeOn enum FunctionUpdate
     */
    FunctionUpdate: "FunctionUpdate",
    /**
     * RuntimeManagementConfigUpdateRuntimeOn enum Manual
     */
    Manual: "Manual",
} as const;

/**
 * Specify the runtime update mode.  +   *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.  +   *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.  +   *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).    *Valid Values*: ``Auto`` | ``FunctionUpdate`` | ``Manual``
 */
export type RuntimeManagementConfigUpdateRuntimeOn = (typeof RuntimeManagementConfigUpdateRuntimeOn)[keyof typeof RuntimeManagementConfigUpdateRuntimeOn];

export const SSEStatus = {
    /**
     * SSEStatus enum DISABLED
     */
    DISABLED: "DISABLED",
    /**
     * SSEStatus enum DISABLING
     */
    DISABLING: "DISABLING",
    /**
     * SSEStatus enum ENABLED
     */
    ENABLED: "ENABLED",
    /**
     * SSEStatus enum ENABLING
     */
    ENABLING: "ENABLING",
} as const;

/**
 * Property value
 */
export type SSEStatus = (typeof SSEStatus)[keyof typeof SSEStatus];

export const SSEType = {
    /**
     * SSEType enum none
     */
    None: "none",
    /**
     * SSEType enum sse-ebs
     */
    SseEbs: "sse-ebs",
    /**
     * SSEType enum sse-kms
     */
    SseKms: "sse-kms",
} as const;

/**
 * Property value
 */
export type SSEType = (typeof SSEType)[keyof typeof SSEType];

export const ScaleDownBehavior = {
    /**
     * ScaleDownBehavior enum TERMINATE_AT_INSTANCE_HOUR
     */
    TERMINATE_AT_INSTANCE_HOUR: "TERMINATE_AT_INSTANCE_HOUR",
    /**
     * ScaleDownBehavior enum TERMINATE_AT_TASK_COMPLETION
     */
    TERMINATE_AT_TASK_COMPLETION: "TERMINATE_AT_TASK_COMPLETION",
} as const;

/**
 * Property value
 */
export type ScaleDownBehavior = (typeof ScaleDownBehavior)[keyof typeof ScaleDownBehavior];

export const ScanStatus = {
    /**
     * ScanStatus enum ACTIVE
     */
    ACTIVE: "ACTIVE",
    /**
     * ScanStatus enum COMPLETE
     */
    COMPLETE: "COMPLETE",
    /**
     * ScanStatus enum FAILED
     */
    FAILED: "FAILED",
    /**
     * ScanStatus enum FINDINGS_UNAVAILABLE
     */
    FINDINGS_UNAVAILABLE: "FINDINGS_UNAVAILABLE",
    /**
     * ScanStatus enum IN_PROGRESS
     */
    IN_PROGRESS: "IN_PROGRESS",
    /**
     * ScanStatus enum PENDING
     */
    PENDING: "PENDING",
    /**
     * ScanStatus enum SCAN_ELIGIBILITY_EXPIRED
     */
    SCAN_ELIGIBILITY_EXPIRED: "SCAN_ELIGIBILITY_EXPIRED",
    /**
     * ScanStatus enum UNSUPPORTED_IMAGE
     */
    UNSUPPORTED_IMAGE: "UNSUPPORTED_IMAGE",
} as const;

/**
 * Property value
 */
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus];

export const SchedulingStrategy = {
    /**
     * SchedulingStrategy enum DAEMON
     */
    DAEMON: "DAEMON",
    /**
     * SchedulingStrategy enum REPLICA
     */
    REPLICA: "REPLICA",
} as const;

/**
 * The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html). There are two service scheduler strategies available:  +   ``REPLICA``-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types.  +   ``DAEMON``-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.  Tasks using the Fargate launch type or the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types don't support the ``DAEMON`` scheduling strategy.
 */
export type SchedulingStrategy = (typeof SchedulingStrategy)[keyof typeof SchedulingStrategy];

export const ServerSideEncryptionByDefaultSSEAlgorithm = {
    /**
     * ServerSideEncryptionByDefaultSSEAlgorithm enum AES256
     */
    AES256: "AES256",
    /**
     * ServerSideEncryptionByDefaultSSEAlgorithm enum aws:kms
     */
    AwsKms: "aws:kms",
    /**
     * ServerSideEncryptionByDefaultSSEAlgorithm enum aws:kms:dsse
     */
    AwsKmsDsse: "aws:kms:dsse",
} as const;

/**
 * Server-side encryption algorithm to use for the default encryption.
 */
export type ServerSideEncryptionByDefaultSSEAlgorithm = (typeof ServerSideEncryptionByDefaultSSEAlgorithm)[keyof typeof ServerSideEncryptionByDefaultSSEAlgorithm];

export const ServerType = {
    /**
     * ServerType enum BITBUCKET
     */
    BITBUCKET: "BITBUCKET",
    /**
     * ServerType enum GITHUB
     */
    GITHUB: "GITHUB",
    /**
     * ServerType enum GITHUB_ENTERPRISE
     */
    GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
    /**
     * ServerType enum GITLAB
     */
    GITLAB: "GITLAB",
    /**
     * ServerType enum GITLAB_SELF_MANAGED
     */
    GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
} as const;

/**
 * Property value
 */
export type ServerType = (typeof ServerType)[keyof typeof ServerType];

export const SimpleCriterionKeyForJob = {
    /**
     * SimpleCriterionKeyForJob enum ACCOUNT_ID
     */
    ACCOUNT_ID: "ACCOUNT_ID",
    /**
     * SimpleCriterionKeyForJob enum S3_BUCKET_EFFECTIVE_PERMISSION
     */
    S3_BUCKET_EFFECTIVE_PERMISSION: "S3_BUCKET_EFFECTIVE_PERMISSION",
    /**
     * SimpleCriterionKeyForJob enum S3_BUCKET_NAME
     */
    S3_BUCKET_NAME: "S3_BUCKET_NAME",
    /**
     * SimpleCriterionKeyForJob enum S3_BUCKET_SHARED_ACCESS
     */
    S3_BUCKET_SHARED_ACCESS: "S3_BUCKET_SHARED_ACCESS",
} as const;

/**
 * Property value
 */
export type SimpleCriterionKeyForJob = (typeof SimpleCriterionKeyForJob)[keyof typeof SimpleCriterionKeyForJob];

export const SnapStartApplyOn = {
    /**
     * SnapStartApplyOn enum None
     */
    None: "None",
    /**
     * SnapStartApplyOn enum PublishedVersions
     */
    PublishedVersions: "PublishedVersions",
} as const;

/**
 * Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.
 */
export type SnapStartApplyOn = (typeof SnapStartApplyOn)[keyof typeof SnapStartApplyOn];

export const SnapshotState = {
    /**
     * SnapshotState enum completed
     */
    Completed: "completed",
    /**
     * SnapshotState enum error
     */
    Error: "error",
    /**
     * SnapshotState enum pending
     */
    Pending: "pending",
    /**
     * SnapshotState enum recoverable
     */
    Recoverable: "recoverable",
    /**
     * SnapshotState enum recovering
     */
    Recovering: "recovering",
} as const;

/**
 * Property value
 */
export type SnapshotState = (typeof SnapshotState)[keyof typeof SnapshotState];

export const SourceAuthType = {
    /**
     * SourceAuthType enum CODECONNECTIONS
     */
    CODECONNECTIONS: "CODECONNECTIONS",
    /**
     * SourceAuthType enum OAUTH
     */
    OAUTH: "OAUTH",
} as const;

/**
 * Property value
 */
export type SourceAuthType = (typeof SourceAuthType)[keyof typeof SourceAuthType];

export const SourceType = {
    /**
     * SourceType enum AWS::EC2::Instance
     */
    AWSEC2Instance: "AWS::EC2::Instance",
    /**
     * SourceType enum AWS::IoT::Thing
     */
    AWSIoTThing: "AWS::IoT::Thing",
    /**
     * SourceType enum AWS::SSM::ManagedInstance
     */
    AWSSSMManagedInstance: "AWS::SSM::ManagedInstance",
} as const;

/**
 * Property value
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

export const SseKmsEncryptedObjectsStatus = {
    /**
     * SseKmsEncryptedObjectsStatus enum Disabled
     */
    Disabled: "Disabled",
    /**
     * SseKmsEncryptedObjectsStatus enum Enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS key stored in AWS Key Management Service.
 */
export type SseKmsEncryptedObjectsStatus = (typeof SseKmsEncryptedObjectsStatus)[keyof typeof SseKmsEncryptedObjectsStatus];

export const StackStatus = {
    /**
     * StackStatus enum CREATE_COMPLETE
     */
    CREATE_COMPLETE: "CREATE_COMPLETE",
    /**
     * StackStatus enum CREATE_FAILED
     */
    CREATE_FAILED: "CREATE_FAILED",
    /**
     * StackStatus enum CREATE_IN_PROGRESS
     */
    CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
    /**
     * StackStatus enum DELETE_COMPLETE
     */
    DELETE_COMPLETE: "DELETE_COMPLETE",
    /**
     * StackStatus enum DELETE_FAILED
     */
    DELETE_FAILED: "DELETE_FAILED",
    /**
     * StackStatus enum DELETE_IN_PROGRESS
     */
    DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
    /**
     * StackStatus enum IMPORT_COMPLETE
     */
    IMPORT_COMPLETE: "IMPORT_COMPLETE",
    /**
     * StackStatus enum IMPORT_IN_PROGRESS
     */
    IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
    /**
     * StackStatus enum IMPORT_ROLLBACK_COMPLETE
     */
    IMPORT_ROLLBACK_COMPLETE: "IMPORT_ROLLBACK_COMPLETE",
    /**
     * StackStatus enum IMPORT_ROLLBACK_FAILED
     */
    IMPORT_ROLLBACK_FAILED: "IMPORT_ROLLBACK_FAILED",
    /**
     * StackStatus enum IMPORT_ROLLBACK_IN_PROGRESS
     */
    IMPORT_ROLLBACK_IN_PROGRESS: "IMPORT_ROLLBACK_IN_PROGRESS",
    /**
     * StackStatus enum REVIEW_IN_PROGRESS
     */
    REVIEW_IN_PROGRESS: "REVIEW_IN_PROGRESS",
    /**
     * StackStatus enum ROLLBACK_COMPLETE
     */
    ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
    /**
     * StackStatus enum ROLLBACK_FAILED
     */
    ROLLBACK_FAILED: "ROLLBACK_FAILED",
    /**
     * StackStatus enum ROLLBACK_IN_PROGRESS
     */
    ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
    /**
     * StackStatus enum UPDATE_COMPLETE
     */
    UPDATE_COMPLETE: "UPDATE_COMPLETE",
    /**
     * StackStatus enum UPDATE_COMPLETE_CLEANUP_IN_PROGRESS
     */
    UPDATE_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS",
    /**
     * StackStatus enum UPDATE_FAILED
     */
    UPDATE_FAILED: "UPDATE_FAILED",
    /**
     * StackStatus enum UPDATE_IN_PROGRESS
     */
    UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
    /**
     * StackStatus enum UPDATE_ROLLBACK_COMPLETE
     */
    UPDATE_ROLLBACK_COMPLETE: "UPDATE_ROLLBACK_COMPLETE",
    /**
     * StackStatus enum UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS
     */
    UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
    /**
     * StackStatus enum UPDATE_ROLLBACK_FAILED
     */
    UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
    /**
     * StackStatus enum UPDATE_ROLLBACK_IN_PROGRESS
     */
    UPDATE_ROLLBACK_IN_PROGRESS: "UPDATE_ROLLBACK_IN_PROGRESS",
} as const;

/**
 * Property stackStatus
 */
export type StackStatus = (typeof StackStatus)[keyof typeof StackStatus];

export const StatefulEngineOptionsRuleOrder = {
    /**
     * StatefulEngineOptionsRuleOrder enum DEFAULT_ACTION_ORDER
     */
    DEFAULT_ACTION_ORDER: "DEFAULT_ACTION_ORDER",
    /**
     * StatefulEngineOptionsRuleOrder enum STRICT_ORDER
     */
    STRICT_ORDER: "STRICT_ORDER",
} as const;

/**
 * Property ruleOrder
 */
export type StatefulEngineOptionsRuleOrder = (typeof StatefulEngineOptionsRuleOrder)[keyof typeof StatefulEngineOptionsRuleOrder];

export const StatefulEngineOptionsStreamExceptionPolicy = {
    /**
     * StatefulEngineOptionsStreamExceptionPolicy enum CONTINUE
     */
    CONTINUE: "CONTINUE",
    /**
     * StatefulEngineOptionsStreamExceptionPolicy enum DROP
     */
    DROP: "DROP",
    /**
     * StatefulEngineOptionsStreamExceptionPolicy enum REJECT
     */
    REJECT: "REJECT",
} as const;

/**
 * Property streamExceptionPolicy
 */
export type StatefulEngineOptionsStreamExceptionPolicy = (typeof StatefulEngineOptionsStreamExceptionPolicy)[keyof typeof StatefulEngineOptionsStreamExceptionPolicy];

export const StatefulRuleAction = {
    /**
     * StatefulRuleAction enum ALERT
     */
    ALERT: "ALERT",
    /**
     * StatefulRuleAction enum DROP
     */
    DROP: "DROP",
    /**
     * StatefulRuleAction enum PASS
     */
    PASS: "PASS",
    /**
     * StatefulRuleAction enum REJECT
     */
    REJECT: "REJECT",
} as const;

/**
 * Property action
 */
export type StatefulRuleAction = (typeof StatefulRuleAction)[keyof typeof StatefulRuleAction];

export const StatefulRuleGroupOverrideAction = {
    /**
     * StatefulRuleGroupOverrideAction enum DROP_TO_ALERT
     */
    DROP_TO_ALERT: "DROP_TO_ALERT",
} as const;

/**
 * Property action
 */
export type StatefulRuleGroupOverrideAction = (typeof StatefulRuleGroupOverrideAction)[keyof typeof StatefulRuleGroupOverrideAction];

export const StatefulRuleOptionsRuleOrder = {
    /**
     * StatefulRuleOptionsRuleOrder enum DEFAULT_ACTION_ORDER
     */
    DEFAULT_ACTION_ORDER: "DEFAULT_ACTION_ORDER",
    /**
     * StatefulRuleOptionsRuleOrder enum STRICT_ORDER
     */
    STRICT_ORDER: "STRICT_ORDER",
} as const;

/**
 * Property ruleOrder
 */
export type StatefulRuleOptionsRuleOrder = (typeof StatefulRuleOptionsRuleOrder)[keyof typeof StatefulRuleOptionsRuleOrder];

export const Status = {
    /**
     * Status enum ACTIVE
     */
    ACTIVE: "ACTIVE",
    /**
     * Status enum PENDING_CLOSURE
     */
    PENDING_CLOSURE: "PENDING_CLOSURE",
    /**
     * Status enum SUSPENDED
     */
    SUSPENDED: "SUSPENDED",
} as const;

/**
 * The status of the account in the organization.
 */
export type Status = (typeof Status)[keyof typeof Status];

export const StatusName = {
    /**
     * StatusName enum reachability
     */
    Reachability: "reachability",
} as const;

/**
 * Property value
 */
export type StatusName = (typeof StatusName)[keyof typeof StatusName];

export const StatusType = {
    /**
     * statusType enum Active
     */
    Active: "Active",
    /**
     * statusType enum Inactive
     */
    Inactive: "Inactive",
} as const;

/**
 * Property value
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const StorageTier = {
    /**
     * StorageTier enum archive
     */
    Archive: "archive",
    /**
     * StorageTier enum standard
     */
    Standard: "standard",
} as const;

/**
 * Property value
 */
export type StorageTier = (typeof StorageTier)[keyof typeof StorageTier];

export const SummaryStatus = {
    /**
     * SummaryStatus enum impaired
     */
    Impaired: "impaired",
    /**
     * SummaryStatus enum initializing
     */
    Initializing: "initializing",
    /**
     * SummaryStatus enum insufficient-data
     */
    InsufficientData: "insufficient-data",
    /**
     * SummaryStatus enum not-applicable
     */
    NotApplicable: "not-applicable",
    /**
     * SummaryStatus enum ok
     */
    Ok: "ok",
} as const;

/**
 * Property value
 */
export type SummaryStatus = (typeof SummaryStatus)[keyof typeof SummaryStatus];

export const TLSSecurityPolicy = {
    /**
     * TLSSecurityPolicy enum Policy-Min-TLS-1-0-2019-07
     */
    PolicyMinTLS10201907: "Policy-Min-TLS-1-0-2019-07",
    /**
     * TLSSecurityPolicy enum Policy-Min-TLS-1-2-2019-07
     */
    PolicyMinTLS12201907: "Policy-Min-TLS-1-2-2019-07",
    /**
     * TLSSecurityPolicy enum Policy-Min-TLS-1-2-PFS-2023-10
     */
    PolicyMinTLS12PFS202310: "Policy-Min-TLS-1-2-PFS-2023-10",
} as const;

/**
 * Property value
 */
export type TLSSecurityPolicy = (typeof TLSSecurityPolicy)[keyof typeof TLSSecurityPolicy];

export const TargetHealthReasonEnum = {
    /**
     * TargetHealthReasonEnum enum Elb.InitialHealthChecking
     */
    ElbInitialHealthChecking: "Elb.InitialHealthChecking",
    /**
     * TargetHealthReasonEnum enum Elb.InternalError
     */
    ElbInternalError: "Elb.InternalError",
    /**
     * TargetHealthReasonEnum enum Elb.RegistrationInProgress
     */
    ElbRegistrationInProgress: "Elb.RegistrationInProgress",
    /**
     * TargetHealthReasonEnum enum Target.DeregistrationInProgress
     */
    TargetDeregistrationInProgress: "Target.DeregistrationInProgress",
    /**
     * TargetHealthReasonEnum enum Target.FailedHealthChecks
     */
    TargetFailedHealthChecks: "Target.FailedHealthChecks",
    /**
     * TargetHealthReasonEnum enum Target.HealthCheckDisabled
     */
    TargetHealthCheckDisabled: "Target.HealthCheckDisabled",
    /**
     * TargetHealthReasonEnum enum Target.InvalidState
     */
    TargetInvalidState: "Target.InvalidState",
    /**
     * TargetHealthReasonEnum enum Target.IpUnusable
     */
    TargetIpUnusable: "Target.IpUnusable",
    /**
     * TargetHealthReasonEnum enum Target.NotInUse
     */
    TargetNotInUse: "Target.NotInUse",
    /**
     * TargetHealthReasonEnum enum Target.NotRegistered
     */
    TargetNotRegistered: "Target.NotRegistered",
    /**
     * TargetHealthReasonEnum enum Target.ResponseCodeMismatch
     */
    TargetResponseCodeMismatch: "Target.ResponseCodeMismatch",
    /**
     * TargetHealthReasonEnum enum Target.Timeout
     */
    TargetTimeout: "Target.Timeout",
} as const;

/**
 * Property value
 */
export type TargetHealthReasonEnum = (typeof TargetHealthReasonEnum)[keyof typeof TargetHealthReasonEnum];

export const TargetHealthStateEnum = {
    /**
     * TargetHealthStateEnum enum draining
     */
    Draining: "draining",
    /**
     * TargetHealthStateEnum enum healthy
     */
    Healthy: "healthy",
    /**
     * TargetHealthStateEnum enum initial
     */
    Initial: "initial",
    /**
     * TargetHealthStateEnum enum unavailable
     */
    Unavailable: "unavailable",
    /**
     * TargetHealthStateEnum enum unhealthy
     */
    Unhealthy: "unhealthy",
    /**
     * TargetHealthStateEnum enum unhealthy.draining
     */
    UnhealthyDraining: "unhealthy.draining",
    /**
     * TargetHealthStateEnum enum unused
     */
    Unused: "unused",
} as const;

/**
 * Property value
 */
export type TargetHealthStateEnum = (typeof TargetHealthStateEnum)[keyof typeof TargetHealthStateEnum];

export const Tenancy = {
    /**
     * Tenancy enum dedicated
     */
    Dedicated: "dedicated",
    /**
     * Tenancy enum default
     */
    Default: "default",
    /**
     * Tenancy enum host
     */
    Host: "host",
} as const;

/**
 * Property value
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];

export const Tier = {
    /**
     * Tier enum Advanced
     */
    Advanced: "Advanced",
    /**
     * Tier enum Intelligent-Tiering
     */
    IntelligentTiering: "Intelligent-Tiering",
    /**
     * Tier enum Standard
     */
    Standard: "Standard",
} as const;

/**
 * The parameter tier.
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

export const TieringAccessTier = {
    /**
     * TieringAccessTier enum ARCHIVE_ACCESS
     */
    ARCHIVE_ACCESS: "ARCHIVE_ACCESS",
    /**
     * TieringAccessTier enum DEEP_ARCHIVE_ACCESS
     */
    DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS",
} as const;

/**
 * S3 Intelligent-Tiering access tier. See [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class.
 */
export type TieringAccessTier = (typeof TieringAccessTier)[keyof typeof TieringAccessTier];

export const TpmSupportValues = {
    /**
     * TpmSupportValues enum v2.0
     */
    V20: "v2.0",
} as const;

/**
 * Property value
 */
export type TpmSupportValues = (typeof TpmSupportValues)[keyof typeof TpmSupportValues];

export const TracingConfigMode = {
    /**
     * TracingConfigMode enum Active
     */
    Active: "Active",
    /**
     * TracingConfigMode enum PassThrough
     */
    PassThrough: "PassThrough",
} as const;

/**
 * The tracing mode.
 */
export type TracingConfigMode = (typeof TracingConfigMode)[keyof typeof TracingConfigMode];

export const TrafficType = {
    /**
     * TrafficType enum ACCEPT
     */
    ACCEPT: "ACCEPT",
    /**
     * TrafficType enum ALL
     */
    ALL: "ALL",
    /**
     * TrafficType enum REJECT
     */
    REJECT: "REJECT",
} as const;

/**
 * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

export const TransitionStorageClass = {
    /**
     * TransitionStorageClass enum DEEP_ARCHIVE
     */
    DEEP_ARCHIVE: "DEEP_ARCHIVE",
    /**
     * TransitionStorageClass enum GLACIER
     */
    GLACIER: "GLACIER",
    /**
     * TransitionStorageClass enum GLACIER_IR
     */
    GLACIER_IR: "GLACIER_IR",
    /**
     * TransitionStorageClass enum INTELLIGENT_TIERING
     */
    INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
    /**
     * TransitionStorageClass enum ONEZONE_IA
     */
    ONEZONE_IA: "ONEZONE_IA",
    /**
     * TransitionStorageClass enum STANDARD_IA
     */
    STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * The storage class to which you want the object to transition.
 */
export type TransitionStorageClass = (typeof TransitionStorageClass)[keyof typeof TransitionStorageClass];

export const Type = {
    /**
     * Type enum String
     */
    String: "String",
    /**
     * Type enum StringList
     */
    StringList: "StringList",
} as const;

/**
 * The type of parameter.
 */
export type Type = (typeof Type)[keyof typeof Type];

export const VersioningConfigurationStatus = {
    /**
     * VersioningConfigurationStatus enum Enabled
     */
    Enabled: "Enabled",
    /**
     * VersioningConfigurationStatus enum Suspended
     */
    Suspended: "Suspended",
} as const;

/**
 * The versioning state of the bucket.
 */
export type VersioningConfigurationStatus = (typeof VersioningConfigurationStatus)[keyof typeof VersioningConfigurationStatus];

export const VirtualizationType = {
    /**
     * VirtualizationType enum hvm
     */
    Hvm: "hvm",
    /**
     * VirtualizationType enum paravirtual
     */
    Paravirtual: "paravirtual",
} as const;

/**
 * Property value
 */
export type VirtualizationType = (typeof VirtualizationType)[keyof typeof VirtualizationType];

export const VolumeType = {
    /**
     * VolumeType enum gp2
     */
    Gp2: "gp2",
    /**
     * VolumeType enum gp3
     */
    Gp3: "gp3",
    /**
     * VolumeType enum io1
     */
    Io1: "io1",
    /**
     * VolumeType enum standard
     */
    Standard: "standard",
} as const;

/**
 * Property value
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

export const VpcEndpointType = {
    /**
     * VpcEndpointType enum Gateway
     */
    Gateway: "Gateway",
    /**
     * VpcEndpointType enum GatewayLoadBalancer
     */
    GatewayLoadBalancer: "GatewayLoadBalancer",
    /**
     * VpcEndpointType enum Interface
     */
    Interface: "Interface",
} as const;

/**
 * The type of endpoint. Default: Gateway
 */
export type VpcEndpointType = (typeof VpcEndpointType)[keyof typeof VpcEndpointType];

export const WebhookBuildType = {
    /**
     * WebhookBuildType enum BUILD
     */
    BUILD: "BUILD",
    /**
     * WebhookBuildType enum BUILD_BATCH
     */
    BUILD_BATCH: "BUILD_BATCH",
} as const;

/**
 * Property value
 */
export type WebhookBuildType = (typeof WebhookBuildType)[keyof typeof WebhookBuildType];

export const WebhookFilterType = {
    /**
     * WebhookFilterType enum ACTOR_ACCOUNT_ID
     */
    ACTOR_ACCOUNT_ID: "ACTOR_ACCOUNT_ID",
    /**
     * WebhookFilterType enum BASE_REF
     */
    BASE_REF: "BASE_REF",
    /**
     * WebhookFilterType enum COMMIT_MESSAGE
     */
    COMMIT_MESSAGE: "COMMIT_MESSAGE",
    /**
     * WebhookFilterType enum EVENT
     */
    EVENT: "EVENT",
    /**
     * WebhookFilterType enum FILE_PATH
     */
    FILE_PATH: "FILE_PATH",
    /**
     * WebhookFilterType enum HEAD_REF
     */
    HEAD_REF: "HEAD_REF",
    /**
     * WebhookFilterType enum RELEASE_NAME
     */
    RELEASE_NAME: "RELEASE_NAME",
    /**
     * WebhookFilterType enum TAG_NAME
     */
    TAG_NAME: "TAG_NAME",
    /**
     * WebhookFilterType enum WORKFLOW_NAME
     */
    WORKFLOW_NAME: "WORKFLOW_NAME",
} as const;

/**
 * Property value
 */
export type WebhookFilterType = (typeof WebhookFilterType)[keyof typeof WebhookFilterType];