import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface CertificateResponse {
        /**
         * PEM formatted public key.
         */
        pem?: string;
    }

    /**
     * Properties of a managed Cassandra cluster.
     */
    export interface ClusterResourceResponseProperties {
        /**
         * Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'.
         */
        authenticationMethod?: string;
        /**
         * Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version.
         */
        cassandraVersion?: string;
        /**
         * List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property.
         */
        clientCertificates?: CertificateResponse[];
        /**
         * If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property.
         */
        clusterNameOverride?: string;
        /**
         * Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'
         */
        delegatedManagementSubnetId?: string;
        /**
         * List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property.
         */
        externalGossipCertificates?: CertificateResponse[];
        /**
         * List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes.
         */
        externalSeedNodes?: SeedNodeResponse[];
        /**
         * List of TLS certificates that unmanaged nodes must trust for gossip with managed nodes. All managed nodes will present TLS client certificates that are verifiable using one of the certificates provided in this property.
         */
        gossipCertificates: CertificateResponse[];
        /**
         * Number of hours to wait between taking a backup of the cluster. To disable backups, set this property to 0.
         */
        hoursBetweenBackups?: number;
        /**
         * Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached.
         */
        prometheusEndpoint?: SeedNodeResponse;
        /**
         * The status of the resource at the time the operation was called.
         */
        provisioningState?: string;
        /**
         * Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs.
         */
        repairEnabled?: boolean;
        /**
         * List of IP addresses of seed nodes in the managed data centers. These should be added to the seed node lists of all unmanaged nodes.
         */
        seedNodes: SeedNodeResponse[];
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type?: string;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedServiceIdentityResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    export interface SeedNodeResponse {
        /**
         * IP address of this seed node.
         */
        ipAddress?: string;
    }
