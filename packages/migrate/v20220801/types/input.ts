import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Gets or sets the availability set resource settings.
     */
    export interface AvailabilitySetResourceSettingsArgs {
        /**
         * Gets or sets the target fault domain.
         */
        faultDomain?: pulumi.Input<number>;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Compute/availabilitySets'.
         */
        resourceType: pulumi.Input<"Microsoft.Compute/availabilitySets">;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
        /**
         * Gets or sets the target update domain.
         */
        updateDomain?: pulumi.Input<number>;
    }

    /**
     * Defines the disk encryption set resource settings.
     */
    export interface DiskEncryptionSetResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Compute/diskEncryptionSets'.
         */
        resourceType: pulumi.Input<"Microsoft.Compute/diskEncryptionSets">;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
    }

    /**
     * Defines the MSI properties of the Move Collection.
     */
    export interface IdentityArgs {
        /**
         * Gets or sets the principal id.
         */
        principalId?: pulumi.Input<string>;
        /**
         * Gets or sets the tenant id.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * The type of identity used for the resource mover service.
         */
        type?: pulumi.Input<string | enums.ResourceIdentityType>;
    }

    /**
     * Defines the key vault resource settings.
     */
    export interface KeyVaultResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.KeyVault/vaults'.
         */
        resourceType: pulumi.Input<"Microsoft.KeyVault/vaults">;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
    }

    /**
     * Defines load balancer backend address pool properties.
     */
    export interface LBBackendAddressPoolResourceSettingsArgs {
        /**
         * Gets or sets the backend address pool name.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Defines load balancer frontend IP configuration properties.
     */
    export interface LBFrontendIPConfigurationResourceSettingsArgs {
        /**
         * Gets or sets the frontend IP configuration name.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets or sets the IP address of the Load Balancer.This is only specified if a specific
         * private IP address shall be allocated from the subnet specified in subnetRef.
         */
        privateIpAddress?: pulumi.Input<string>;
        /**
         * Gets or sets PrivateIP allocation method (Static/Dynamic).
         */
        privateIpAllocationMethod?: pulumi.Input<string>;
        /**
         * Defines reference to subnet.
         */
        subnet?: pulumi.Input<SubnetReferenceArgs>;
        /**
         * Gets or sets the csv list of zones.
         */
        zones?: pulumi.Input<string>;
    }

    /**
     * Defines reference to load balancer backend address pools.
     */
    export interface LoadBalancerBackendAddressPoolReferenceArgs {
        /**
         * Gets the name of the proxy resource on the target side.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: pulumi.Input<string>;
    }

    /**
     * Defines reference to load balancer NAT rules.
     */
    export interface LoadBalancerNatRuleReferenceArgs {
        /**
         * Gets the name of the proxy resource on the target side.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: pulumi.Input<string>;
    }

    /**
     * Defines the load balancer resource settings.
     */
    export interface LoadBalancerResourceSettingsArgs {
        /**
         * Gets or sets the backend address pools of the load balancer.
         */
        backendAddressPools?: pulumi.Input<pulumi.Input<LBBackendAddressPoolResourceSettingsArgs>[]>;
        /**
         * Gets or sets the frontend IP configurations of the load balancer.
         */
        frontendIPConfigurations?: pulumi.Input<pulumi.Input<LBFrontendIPConfigurationResourceSettingsArgs>[]>;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/loadBalancers'.
         */
        resourceType: pulumi.Input<"Microsoft.Network/loadBalancers">;
        /**
         * Gets or sets load balancer sku (Basic/Standard).
         */
        sku?: pulumi.Input<string>;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
        /**
         * Gets or sets the csv list of zones common for all frontend IP configurations. Note this is given
         *  precedence only if frontend IP configurations settings are not present.
         */
        zones?: pulumi.Input<string>;
    }

    /**
     * Defines the move collection properties.
     */
    export interface MoveCollectionPropertiesArgs {
        /**
         * Gets or sets the source region.
         */
        sourceRegion: pulumi.Input<string>;
        /**
         * Gets or sets the target region.
         */
        targetRegion: pulumi.Input<string>;
        /**
         * Gets or sets the version of move collection.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Defines the dependency override of the move resource.
     */
    export interface MoveResourceDependencyOverrideArgs {
        /**
         * Gets or sets the ARM ID of the dependent resource.
         */
        id?: pulumi.Input<string>;
        /**
         * Gets or sets the resource ARM id of either the MoveResource or the resource ARM ID of
         * the dependent resource.
         */
        targetId?: pulumi.Input<string>;
    }

    /**
     * Defines the move resource properties.
     */
    export interface MoveResourcePropertiesArgs {
        /**
         * Gets or sets the move resource dependencies overrides.
         */
        dependsOnOverrides?: pulumi.Input<pulumi.Input<MoveResourceDependencyOverrideArgs>[]>;
        /**
         * Gets or sets the existing target ARM Id of the resource.
         */
        existingTargetId?: pulumi.Input<string>;
        /**
         * Gets or sets the resource settings.
         */
        resourceSettings?: pulumi.Input<AvailabilitySetResourceSettingsArgs | DiskEncryptionSetResourceSettingsArgs | KeyVaultResourceSettingsArgs | LoadBalancerResourceSettingsArgs | NetworkInterfaceResourceSettingsArgs | NetworkSecurityGroupResourceSettingsArgs | PublicIPAddressResourceSettingsArgs | ResourceGroupResourceSettingsArgs | SqlDatabaseResourceSettingsArgs | SqlElasticPoolResourceSettingsArgs | SqlServerResourceSettingsArgs | VirtualMachineResourceSettingsArgs | VirtualNetworkResourceSettingsArgs>;
        /**
         * Gets or sets the Source ARM Id of the resource.
         */
        sourceId: pulumi.Input<string>;
    }

    /**
     * Defines the network interface resource settings.
     */
    export interface NetworkInterfaceResourceSettingsArgs {
        /**
         * Gets or sets a value indicating whether accelerated networking is enabled.
         */
        enableAcceleratedNetworking?: pulumi.Input<boolean>;
        /**
         * Gets or sets the IP configurations of the NIC.
         */
        ipConfigurations?: pulumi.Input<pulumi.Input<NicIpConfigurationResourceSettingsArgs>[]>;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/networkInterfaces'.
         */
        resourceType: pulumi.Input<"Microsoft.Network/networkInterfaces">;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
    }

    /**
     * Defines the NSG resource settings.
     */
    export interface NetworkSecurityGroupResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/networkSecurityGroups'.
         */
        resourceType: pulumi.Input<"Microsoft.Network/networkSecurityGroups">;
        /**
         * Gets or sets Security rules of network security group.
         */
        securityRules?: pulumi.Input<pulumi.Input<NsgSecurityRuleArgs>[]>;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
    }

    /**
     * Defines NIC IP configuration properties.
     */
    export interface NicIpConfigurationResourceSettingsArgs {
        /**
         * Gets or sets the references of the load balancer backend address pools.
         */
        loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<LoadBalancerBackendAddressPoolReferenceArgs>[]>;
        /**
         * Gets or sets the references of the load balancer NAT rules.
         */
        loadBalancerNatRules?: pulumi.Input<pulumi.Input<LoadBalancerNatRuleReferenceArgs>[]>;
        /**
         * Gets or sets the IP configuration name.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets or sets a value indicating whether this IP configuration is the primary.
         */
        primary?: pulumi.Input<boolean>;
        /**
         * Gets or sets the private IP address of the network interface IP Configuration.
         */
        privateIpAddress?: pulumi.Input<string>;
        /**
         * Gets or sets the private IP address allocation method.
         */
        privateIpAllocationMethod?: pulumi.Input<string>;
        /**
         * Defines reference to a public IP.
         */
        publicIp?: pulumi.Input<PublicIpReferenceArgs>;
        /**
         * Defines reference to subnet.
         */
        subnet?: pulumi.Input<SubnetReferenceArgs>;
    }

    /**
     * Defines reference to NSG.
     */
    export interface NsgReferenceArgs {
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: pulumi.Input<string>;
    }

    /**
     * Security Rule data model for Network Security Groups.
     */
    export interface NsgSecurityRuleArgs {
        /**
         * Gets or sets whether network traffic is allowed or denied.
         * Possible values are “Allow” and “Deny”.
         */
        access?: pulumi.Input<string>;
        /**
         * Gets or sets a description for this rule. Restricted to 140 chars.
         */
        description?: pulumi.Input<string>;
        /**
         * Gets or sets destination address prefix. CIDR or source IP range.
         *  A “*” can also be used to match all source IPs. Default tags such
         * as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used.
         */
        destinationAddressPrefix?: pulumi.Input<string>;
        /**
         * Gets or sets Destination Port or Range. Integer or range between
         * 0 and 65535. A “*” can also be used to match all ports.
         */
        destinationPortRange?: pulumi.Input<string>;
        /**
         * Gets or sets the direction of the rule.InBound or Outbound. The
         * direction specifies if rule will be evaluated on incoming or outgoing traffic.
         */
        direction?: pulumi.Input<string>;
        /**
         * Gets or sets the Security rule name.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets or sets the priority of the rule. The value can be between
         * 100 and 4096. The priority number must be unique for each rule in the collection.
         * The lower the priority number, the higher the priority of the rule.
         */
        priority?: pulumi.Input<number>;
        /**
         * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
         */
        protocol?: pulumi.Input<string>;
        /**
         * Gets or sets source address prefix. CIDR or source IP range. A
         * “*” can also be used to match all source IPs.  Default tags such as ‘VirtualNetwork’,
         * ‘AzureLoadBalancer’ and ‘Internet’ can also be used. If this is an ingress
         * rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: pulumi.Input<string>;
        /**
         * Gets or sets Source Port or Range. Integer or range between 0 and
         * 65535. A “*” can also be used to match all ports.
         */
        sourcePortRange?: pulumi.Input<string>;
    }

    /**
     * Defines the public IP address resource settings.
     */
    export interface PublicIPAddressResourceSettingsArgs {
        /**
         * Gets or sets the domain name label.
         */
        domainNameLabel?: pulumi.Input<string>;
        /**
         * Gets or sets the fully qualified domain name.
         */
        fqdn?: pulumi.Input<string>;
        /**
         * Gets or sets public IP allocation method.
         */
        publicIpAllocationMethod?: pulumi.Input<string>;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/publicIPAddresses'.
         */
        resourceType: pulumi.Input<"Microsoft.Network/publicIPAddresses">;
        /**
         * Gets or sets public IP sku.
         */
        sku?: pulumi.Input<string>;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
        /**
         * Gets or sets public IP zones.
         */
        zones?: pulumi.Input<string>;
    }

    /**
     * Defines reference to a public IP.
     */
    export interface PublicIpReferenceArgs {
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: pulumi.Input<string>;
    }

    /**
     * Defines the resource group resource settings.
     */
    export interface ResourceGroupResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'resourceGroups'.
         */
        resourceType: pulumi.Input<"resourceGroups">;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
    }

    /**
     * Defines the Sql Database resource settings.
     */
    export interface SqlDatabaseResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Sql/servers/databases'.
         */
        resourceType: pulumi.Input<"Microsoft.Sql/servers/databases">;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
        /**
         * Defines the zone redundant resource setting.
         */
        zoneRedundant?: pulumi.Input<string | enums.ZoneRedundant>;
    }

    /**
     * Defines the Sql ElasticPool resource settings.
     */
    export interface SqlElasticPoolResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Sql/servers/elasticPools'.
         */
        resourceType: pulumi.Input<"Microsoft.Sql/servers/elasticPools">;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
        /**
         * Defines the zone redundant resource setting.
         */
        zoneRedundant?: pulumi.Input<string | enums.ZoneRedundant>;
    }

    /**
     * Defines the SQL Server resource settings.
     */
    export interface SqlServerResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Sql/servers'.
         */
        resourceType: pulumi.Input<"Microsoft.Sql/servers">;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
    }

    /**
     * Defines reference to subnet.
     */
    export interface SubnetReferenceArgs {
        /**
         * Gets the name of the proxy resource on the target side.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: pulumi.Input<string>;
    }

    /**
     * Defines the virtual network subnets resource settings.
     */
    export interface SubnetResourceSettingsArgs {
        /**
         * Gets or sets address prefix for the subnet.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * Gets or sets the Subnet name.
         */
        name?: pulumi.Input<string>;
        /**
         * Defines reference to NSG.
         */
        networkSecurityGroup?: pulumi.Input<NsgReferenceArgs>;
    }

    /**
     * Gets or sets the virtual machine resource settings.
     */
    export interface VirtualMachineResourceSettingsArgs {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Compute/virtualMachines'.
         */
        resourceType: pulumi.Input<"Microsoft.Compute/virtualMachines">;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target availability set id for virtual machines not in an availability set at source.
         */
        targetAvailabilitySetId?: pulumi.Input<string>;
        /**
         * Gets or sets the target availability zone.
         */
        targetAvailabilityZone?: pulumi.Input<string | enums.TargetAvailabilityZone>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
        /**
         * Gets or sets the target virtual machine size.
         */
        targetVmSize?: pulumi.Input<string>;
        /**
         * Gets or sets user-managed identities
         */
        userManagedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Defines the virtual network resource settings.
     */
    export interface VirtualNetworkResourceSettingsArgs {
        /**
         * Gets or sets the address prefixes for the virtual network.
         */
        addressSpace?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets or sets DHCPOptions that contains an array of DNS servers available to VMs
         * deployed in the virtual network.
         */
        dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets or sets a value indicating whether gets or sets whether the
         * DDOS protection should be switched on.
         */
        enableDdosProtection?: pulumi.Input<boolean>;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/virtualNetworks'.
         */
        resourceType: pulumi.Input<"Microsoft.Network/virtualNetworks">;
        /**
         * Gets or sets List of subnets in a VirtualNetwork.
         */
        subnets?: pulumi.Input<pulumi.Input<SubnetResourceSettingsArgs>[]>;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: pulumi.Input<string>;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: pulumi.Input<string>;
    }
