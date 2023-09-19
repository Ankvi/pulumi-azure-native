import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface CertificateArgs {
        /**
         * PEM formatted public key.
         */
        pem?: pulumi.Input<string>;
    }

    /**
     * Properties of a managed Cassandra cluster.
     */
    export interface ClusterResourcePropertiesArgs {
        /**
         * Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'.
         */
        authenticationMethod?: pulumi.Input<string | enums.AuthenticationMethod>;
        /**
         * Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version.
         */
        cassandraVersion?: pulumi.Input<string>;
        /**
         * List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property.
         */
        clientCertificates?: pulumi.Input<pulumi.Input<CertificateArgs>[]>;
        /**
         * If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property.
         */
        clusterNameOverride?: pulumi.Input<string>;
        /**
         * Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'
         */
        delegatedManagementSubnetId?: pulumi.Input<string>;
        /**
         * List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property.
         */
        externalGossipCertificates?: pulumi.Input<pulumi.Input<CertificateArgs>[]>;
        /**
         * List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes.
         */
        externalSeedNodes?: pulumi.Input<pulumi.Input<SeedNodeArgs>[]>;
        /**
         * Number of hours to wait between taking a backup of the cluster. To disable backups, set this property to 0.
         */
        hoursBetweenBackups?: pulumi.Input<number>;
        /**
         * Initial password for clients connecting as admin to the cluster. Should be changed after cluster creation. Returns null on GET. This field only applies when the authenticationMethod field is 'Cassandra'.
         */
        initialCassandraAdminPassword?: pulumi.Input<string>;
        /**
         * Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached.
         */
        prometheusEndpoint?: pulumi.Input<SeedNodeArgs>;
        /**
         * The status of the resource at the time the operation was called.
         */
        provisioningState?: pulumi.Input<string | enums.ManagedCassandraProvisioningState>;
        /**
         * Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs.
         */
        repairEnabled?: pulumi.Input<boolean>;
        /**
         * To create an empty cluster, omit this field or set it to null. To restore a backup into a new cluster, set this field to the resource id of the backup.
         */
        restoreFromBackupId?: pulumi.Input<string>;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface SeedNodeArgs {
        /**
         * IP address of this seed node.
         */
        ipAddress?: pulumi.Input<string>;
    }
