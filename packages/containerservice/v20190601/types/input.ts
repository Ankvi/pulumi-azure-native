import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    export interface ContainerServiceLinuxProfileArgs {
        /**
         * The administrator username to use for Linux VMs.
         */
        adminUsername: pulumi.Input<string>;
        /**
         * SSH configuration for Linux-based VMs running on Azure.
         */
        ssh: pulumi.Input<ContainerServiceSshConfigurationArgs>;
    }

    /**
     * Profile of network configuration.
     */
    export interface ContainerServiceNetworkProfileArgs {
        /**
         * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: pulumi.Input<string>;
        /**
         * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
         */
        dockerBridgeCidr?: pulumi.Input<string>;
        /**
         * The load balancer sku for the managed cluster.
         */
        loadBalancerSku?: pulumi.Input<string | enums.LoadBalancerSku>;
        /**
         * Network plugin used for building Kubernetes network.
         */
        networkPlugin?: pulumi.Input<string | enums.NetworkPlugin>;
        /**
         * Network policy used for building Kubernetes network.
         */
        networkPolicy?: pulumi.Input<string | enums.NetworkPolicy>;
        /**
         * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: pulumi.Input<string>;
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: pulumi.Input<string>;
    }
    /**
     * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
     */
    export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
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
    export interface ContainerServiceSshConfigurationArgs {
        /**
         * The list of SSH public keys used to authenticate with Linux-based VMs. Only expect one key specified.
         */
        publicKeys: pulumi.Input<pulumi.Input<ContainerServiceSshPublicKeyArgs>[]>;
    }

    /**
     * Contains information about SSH certificate public key data.
     */
    export interface ContainerServiceSshPublicKeyArgs {
        /**
         * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
         */
        keyData: pulumi.Input<string>;
    }

    /**
     * AADProfile specifies attributes for Azure Active Directory integration.
     */
    export interface ManagedClusterAADProfileArgs {
        /**
         * The client AAD application ID.
         */
        clientAppID: pulumi.Input<string>;
        /**
         * The server AAD application ID.
         */
        serverAppID: pulumi.Input<string>;
        /**
         * The server AAD application secret.
         */
        serverAppSecret?: pulumi.Input<string>;
        /**
         * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
         */
        tenantID?: pulumi.Input<string>;
    }

    /**
     * A Kubernetes add-on profile for a managed cluster.
     */
    export interface ManagedClusterAddonProfileArgs {
        /**
         * Key-value pairs for configuring an add-on.
         */
        config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Whether the add-on is enabled or not.
         */
        enabled: pulumi.Input<boolean>;
    }

    /**
     * Profile for the container service agent pool.
     */
    export interface ManagedClusterAgentPoolProfileArgs {
        /**
         * (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
         */
        availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
         */
        count?: pulumi.Input<number>;
        /**
         * Whether to enable auto-scaler
         */
        enableAutoScaling?: pulumi.Input<boolean>;
        /**
         * Enable public IP for nodes
         */
        enableNodePublicIP?: pulumi.Input<boolean>;
        /**
         * Maximum number of nodes for auto-scaling
         */
        maxCount?: pulumi.Input<number>;
        /**
         * Maximum number of pods that can run on a node.
         */
        maxPods?: pulumi.Input<number>;
        /**
         * Minimum number of nodes for auto-scaling
         */
        minCount?: pulumi.Input<number>;
        /**
         * Unique name of the agent pool profile in the context of the subscription and resource group.
         */
        name: pulumi.Input<string>;
        /**
         * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Version of orchestrator specified when creating the managed cluster.
         */
        orchestratorVersion?: pulumi.Input<string>;
        /**
         * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
         */
        osDiskSizeGB?: pulumi.Input<number>;
        /**
         * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
         */
        osType?: pulumi.Input<string | enums.OSType>;
        /**
         * ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
         */
        scaleSetEvictionPolicy?: pulumi.Input<string | enums.ScaleSetEvictionPolicy>;
        /**
         * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
         */
        scaleSetPriority?: pulumi.Input<string | enums.ScaleSetPriority>;
        /**
         * AgentPoolType represents types of an agent pool
         */
        type?: pulumi.Input<string | enums.AgentPoolType>;
        /**
         * Size of agent VMs.
         */
        vmSize?: pulumi.Input<string | enums.ContainerServiceVMSizeTypes>;
        /**
         * VNet SubnetID specifies the VNet's subnet identifier.
         */
        vnetSubnetID?: pulumi.Input<string>;
    }

    /**
     * Identity for the managed cluster.
     */
    export interface ManagedClusterIdentityArgs {
        /**
         * The type of identity used for the managed cluster. Type 'SystemAssigned' will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type 'None' will not use MSI for the managed cluster, service principal will be used instead.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    export interface ManagedClusterServicePrincipalProfileArgs {
        /**
         * The ID for the service principal.
         */
        clientId: pulumi.Input<string>;
        /**
         * The secret password associated with the service principal in plain text.
         */
        secret?: pulumi.Input<string>;
    }

    /**
     * Profile for Windows VMs in the container service cluster.
     */
    export interface ManagedClusterWindowsProfileArgs {
        /**
         * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
         */
        adminPassword?: pulumi.Input<string>;
        /**
         * Specifies the name of the administrator account. <br><br> **restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
         */
        adminUsername: pulumi.Input<string>;
    }
