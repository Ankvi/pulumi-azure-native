import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    export interface ContainerServiceLinuxProfileResponse {
        /**
         * The administrator username to use for Linux VMs.
         */
        adminUsername: string;
        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        ssh: ContainerServiceSshConfigurationResponse;
    }

    /**
     * Profile of network configuration.
     */
    export interface ContainerServiceNetworkProfileResponse {
        /**
         * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: string;
        /**
         * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
         */
        dockerBridgeCidr?: string;
        /**
         * The load balancer sku for the managed cluster.
         */
        loadBalancerSku?: string;
        /**
         * Network plugin used for building Kubernetes network.
         */
        networkPlugin?: string;
        /**
         * Network policy used for building Kubernetes network.
         */
        networkPolicy?: string;
        /**
         * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: string;
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: string;
    }
    /**
     * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
     */
    export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
        return {
            ...val,
            dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
            dockerBridgeCidr: (val.dockerBridgeCidr) ?? "172.17.0.1/16",
            networkPlugin: (val.networkPlugin) ?? "kubenet",
            podCidr: (val.podCidr) ?? "10.244.0.0/16",
            serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
        };
    }

    /**
     * SSH configuration for Linux-based VMs running on Azure.
     */
    export interface ContainerServiceSshConfigurationResponse {
        /**
         * The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
         */
        publicKeys: ContainerServiceSshPublicKeyResponse[];
    }

    /**
     * Contains information about SSH certificate public key data.
     */
    export interface ContainerServiceSshPublicKeyResponse {
        /**
         * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
         */
        keyData: string;
    }

    /**
     * The credential result response.
     */
    export interface CredentialResultResponse {
        /**
         * The name of the credential.
         */
        name: string;
        /**
         * Base64-encoded Kubernetes configuration file.
         */
        value: string;
    }

    /**
     * AADProfile specifies attributes for Azure Active Directory integration.
     */
    export interface ManagedClusterAADProfileResponse {
        /**
         * The client AAD application ID.
         */
        clientAppID: string;
        /**
         * The server AAD application ID.
         */
        serverAppID: string;
        /**
         * The server AAD application secret.
         */
        serverAppSecret?: string;
        /**
         * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
         */
        tenantID?: string;
    }

    /**
     * A Kubernetes add-on profile for a managed cluster.
     */
    export interface ManagedClusterAddonProfileResponse {
        /**
         * Key-value pairs for configuring an add-on.
         */
        config?: {[key: string]: string};
        /**
         * Whether the add-on is enabled or not.
         */
        enabled: boolean;
    }

    /**
     * Profile for the container service agent pool.
     */
    export interface ManagedClusterAgentPoolProfileResponse {
        /**
         * (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
         */
        availabilityZones?: string[];
        /**
         * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: number;
        /**
         * Whether to enable auto-scaler
         */
        enableAutoScaling?: boolean;
        /**
         * Enable public IP for nodes
         */
        enableNodePublicIP?: boolean;
        /**
         * Maximum number of nodes for auto-scaling
         */
        maxCount?: number;
        /**
         * Maximum number of pods that can run on a node.
         */
        maxPods?: number;
        /**
         * Minimum number of nodes for auto-scaling
         */
        minCount?: number;
        /**
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name: string;
        /**
         * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: string[];
        /**
         * Version of orchestrator specified when creating the managed cluster.
         */
        orchestratorVersion?: string;
        /**
         * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
         */
        osDiskSizeGB?: number;
        /**
         * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
         */
        osType?: string;
        /**
         * The current deployment or provisioning state, which only appears in the response.
         */
        provisioningState: string;
        /**
         * ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
         */
        scaleSetEvictionPolicy?: string;
        /**
         * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
         */
        scaleSetPriority?: string;
        /**
         * AgentPoolType represents types of an agent pool
         */
        type?: string;
        /**
         * Size of agent VMs.
         */
        vmSize?: string;
        /**
         * VNet SubnetID specifies the VNet's subnet identifier.
         */
        vnetSubnetID?: string;
    }

    /**
     * Identity for the managed cluster.
     */
    export interface ManagedClusterIdentityResponse {
        /**
         * The principal id of the system assigned identity which is used by master components.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity which is used by master components.
         */
        tenantId: string;
        /**
         * The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
         */
        type?: string;
    }

    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    export interface ManagedClusterServicePrincipalProfileResponse {
        /**
         * The ID for the service principal.
         */
        clientId: string;
        /**
         * The secret password associated with the service principal in plain text.
         */
        secret?: string;
    }

    /**
     * Profile for Windows VMs in the container service cluster.
     */
    export interface ManagedClusterWindowsProfileResponse {
        /**
         * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
         */
        adminPassword?: string;
        /**
         * Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
         */
        adminUsername: string;
    }
