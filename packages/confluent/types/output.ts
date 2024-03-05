import * as pulumi from "@pulumi/pulumi";
/**
 * The network associated with this object
 */
export interface ClusterByokEntityResponse {
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * The configuration of the Kafka cluster
 */
export interface ClusterConfigEntityResponse {
    /**
     * The lifecycle phase of the cluster
     */
    kind?: string;
}

/**
 * The environment to which cluster belongs
 */
export interface ClusterEnvironmentEntityResponse {
    /**
     * Environment of the referred resource
     */
    environment?: string;
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * The network associated with this object
 */
export interface ClusterNetworkEntityResponse {
    /**
     * Environment of the referred resource
     */
    environment?: string;
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * Record of the environment
 */
export interface ClusterRecordResponse {
    /**
     * Display name of the user
     */
    displayName?: string;
    /**
     * Id of the environment
     */
    id?: string;
    /**
     * Type of environment
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
    /**
     * Specification of the cluster
     */
    spec?: ClusterSpecEntityResponse;
    /**
     * Specification of the cluster
     */
    status?: ClusterStatusEntityResponse;
}

/**
 * Spec of the cluster record
 */
export interface ClusterSpecEntityResponse {
    /**
     * The Kafka API cluster endpoint
     */
    apiEndpoint?: string;
    /**
     * The availability zone configuration of the cluster
     */
    availability?: string;
    /**
     * Specification of the cluster
     */
    byok?: ClusterByokEntityResponse;
    /**
     * The cloud service provider 
     */
    cloud?: string;
    /**
     * Specification of the cluster
     */
    config?: ClusterConfigEntityResponse;
    /**
     * The name of the cluster
     */
    displayName?: string;
    /**
     * Specification of the cluster
     */
    environment?: ClusterEnvironmentEntityResponse;
    /**
     * The cluster HTTP request URL.
     */
    httpEndpoint?: string;
    /**
     * The bootstrap endpoint used by Kafka clients to connect to the cluster
     */
    kafkaBootstrapEndpoint?: string;
    /**
     * Specification of the cluster
     */
    network?: ClusterNetworkEntityResponse;
    /**
     * The cloud service provider region
     */
    region?: string;
    /**
     * type of zone availability
     */
    zone?: string;
}

/**
 * Status of the cluster record
 */
export interface ClusterStatusEntityResponse {
    /**
     * The number of Confluent Kafka Units 
     */
    cku?: number;
    /**
     * The lifecycle phase of the cluster
     */
    phase?: string;
}

/**
 * Metadata of the list
 */
export interface ConfluentListMetadataResponse {
    /**
     * First page of the list
     */
    first?: string;
    /**
     * Last page of the list
     */
    last?: string;
    /**
     * Next page of the list
     */
    next?: string;
    /**
     * Previous page of the list
     */
    prev?: string;
    /**
     * Total size of the list
     */
    totalSize?: number;
}

/**
 * Record of the environment
 */
export interface EnvironmentRecordResponse {
    /**
     * Display name of the user
     */
    displayName?: string;
    /**
     * Id of the environment
     */
    id?: string;
    /**
     * Type of environment
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
}

/**
 * Record of the invitation
 */
export interface InvitationRecordResponse {
    /**
     * Accepted date time of the invitation
     */
    acceptedAt?: string;
    /**
     * Auth type of the user
     */
    authType?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Expiration date time of the invitation
     */
    expiresAt?: string;
    /**
     * Id of the invitation
     */
    id?: string;
    /**
     * Type of account
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
    /**
     * Status of the invitation
     */
    status?: string;
}

/**
 * Metadata of the data record
 */
export interface MetadataEntityResponse {
    /**
     * Created Date Time
     */
    createdAt?: string;
    /**
     * Deleted Date time
     */
    deletedAt?: string;
    /**
     * Resource name of the record
     */
    resourceName?: string;
    /**
     * Self lookup url
     */
    self?: string;
    /**
     * Updated Date time
     */
    updatedAt?: string;
}

/**
 * Confluent Offer detail
 */
export interface OfferDetailResponse {
    /**
     * Offer Id
     */
    id: string;
    /**
     * Offer Plan Id
     */
    planId: string;
    /**
     * Offer Plan Name
     */
    planName: string;
    /**
     * Publisher Id
     */
    publisherId: string;
    /**
     * SaaS Offer Status
     */
    status: string;
    /**
     * Offer Plan Term unit
     */
    termUnit: string;
}

/**
 * Details of region record
 */
export interface RegionRecordResponse {
    /**
     * Id of the cluster
     */
    id?: string;
    /**
     * Kind of the cluster
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: SCMetadataEntityResponse;
    /**
     * Specification of the region
     */
    spec?: RegionSpecEntityResponse;
}

/**
 * Region spec details
 */
export interface RegionSpecEntityResponse {
    /**
     * Cloud provider name
     */
    cloud?: string;
    /**
     * Display Name of the region
     */
    name?: string;
    packages?: string[];
    /**
     * Region name
     */
    regionName?: string;
}

/**
 * Record of the environment
 */
export interface RoleBindingRecordResponse {
    /**
     * A CRN that specifies the scope and resource patterns necessary for the role to bind
     */
    crnPattern?: string;
    /**
     * Id of the role
     */
    id?: string;
    /**
     * The type of the resource.
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
    /**
     * The principal User or Group to bind the role to
     */
    principal?: string;
    /**
     * The name of the role to bind to the principal
     */
    roleName?: string;
}

/**
 * Metadata of the data record
 */
export interface SCMetadataEntityResponse {
    /**
     * Created Date Time
     */
    createdTimestamp?: string;
    /**
     * Deleted Date time
     */
    deletedTimestamp?: string;
    /**
     * Resource name of the record
     */
    resourceName?: string;
    /**
     * Self lookup url
     */
    self?: string;
    /**
     * Updated Date time
     */
    updatedTimestamp?: string;
}

/**
 * Record of the service account
 */
export interface ServiceAccountRecordResponse {
    /**
     * Description of the service account
     */
    description?: string;
    /**
     * Name of the service account
     */
    displayName?: string;
    /**
     * Id of the service account
     */
    id?: string;
    /**
     * Type of account
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Subscriber detail
 */
export interface UserDetailResponse {
    /**
     * Email address
     */
    emailAddress: string;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Last name
     */
    lastName?: string;
}

/**
 * Record of the user
 */
export interface UserRecordResponse {
    /**
     * Auth type of the user
     */
    authType?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Name of the user
     */
    fullName?: string;
    /**
     * Id of the user
     */
    id?: string;
    /**
     * Type of account
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
}



