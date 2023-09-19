import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines the properties for automatic resolution.
     */
    export interface AutomaticResolutionPropertiesResponse {
        /**
         * Gets the MoveResource ARM ID of
         * the dependent resource if the resolution type is Automatic.
         */
        moveResourceId?: string;
    }

    /**
     * Gets or sets the availability set resource settings.
     */
    export interface AvailabilitySetResourceSettingsResponse {
        /**
         * Gets or sets the target fault domain.
         */
        faultDomain?: number;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Compute/availabilitySets'.
         */
        resourceType: "Microsoft.Compute/availabilitySets";
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
        /**
         * Gets or sets the target update domain.
         */
        updateDomain?: number;
    }

    /**
     * Defines the disk encryption set resource settings.
     */
    export interface DiskEncryptionSetResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Compute/diskEncryptionSets'.
         */
        resourceType: "Microsoft.Compute/diskEncryptionSets";
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
    }

    /**
     * Defines the MSI properties of the Move Collection.
     */
    export interface IdentityResponse {
        /**
         * Gets or sets the principal id.
         */
        principalId?: string;
        /**
         * Gets or sets the tenant id.
         */
        tenantId?: string;
        /**
         * The type of identity used for the resource mover service.
         */
        type?: string;
    }

    /**
     * Defines the job status.
     */
    export interface JobStatusResponse {
        /**
         * Defines the job name.
         */
        jobName: string;
        /**
         * Gets or sets the monitoring job percentage.
         */
        jobProgress: string;
    }

    /**
     * Defines the key vault resource settings.
     */
    export interface KeyVaultResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.KeyVault/vaults'.
         */
        resourceType: "Microsoft.KeyVault/vaults";
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
    }

    /**
     * Defines load balancer backend address pool properties.
     */
    export interface LBBackendAddressPoolResourceSettingsResponse {
        /**
         * Gets or sets the backend address pool name.
         */
        name?: string;
    }

    /**
     * Defines load balancer frontend IP configuration properties.
     */
    export interface LBFrontendIPConfigurationResourceSettingsResponse {
        /**
         * Gets or sets the frontend IP configuration name.
         */
        name?: string;
        /**
         * Gets or sets the IP address of the Load Balancer.This is only specified if a specific
         * private IP address shall be allocated from the subnet specified in subnetRef.
         */
        privateIpAddress?: string;
        /**
         * Gets or sets PrivateIP allocation method (Static/Dynamic).
         */
        privateIpAllocationMethod?: string;
        /**
         * Defines reference to subnet.
         */
        subnet?: SubnetReferenceResponse;
        /**
         * Gets or sets the csv list of zones.
         */
        zones?: string;
    }

    /**
     * Defines reference to load balancer backend address pools.
     */
    export interface LoadBalancerBackendAddressPoolReferenceResponse {
        /**
         * Gets the name of the proxy resource on the target side.
         */
        name?: string;
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: string;
    }

    /**
     * Defines reference to load balancer NAT rules.
     */
    export interface LoadBalancerNatRuleReferenceResponse {
        /**
         * Gets the name of the proxy resource on the target side.
         */
        name?: string;
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: string;
    }

    /**
     * Defines the load balancer resource settings.
     */
    export interface LoadBalancerResourceSettingsResponse {
        /**
         * Gets or sets the backend address pools of the load balancer.
         */
        backendAddressPools?: LBBackendAddressPoolResourceSettingsResponse[];
        /**
         * Gets or sets the frontend IP configurations of the load balancer.
         */
        frontendIPConfigurations?: LBFrontendIPConfigurationResourceSettingsResponse[];
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/loadBalancers'.
         */
        resourceType: "Microsoft.Network/loadBalancers";
        /**
         * Gets or sets load balancer sku (Basic/Standard).
         */
        sku?: string;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
        /**
         * Gets or sets the csv list of zones common for all frontend IP configurations. Note this is given
         *  precedence only if frontend IP configurations settings are not present.
         */
        zones?: string;
    }

    /**
     * Defines the properties for manual resolution.
     */
    export interface ManualResolutionPropertiesResponse {
        /**
         * Gets or sets the target resource ARM ID of the dependent resource if the resource type is Manual.
         */
        targetId?: string;
    }

    /**
     * Defines the move collection properties.
     */
    export interface MoveCollectionPropertiesResponse {
        /**
         * Defines the move collection errors.
         */
        errors: MoveCollectionPropertiesResponseErrors;
        /**
         * Defines the provisioning states.
         */
        provisioningState: string;
        /**
         * Gets or sets the source region.
         */
        sourceRegion: string;
        /**
         * Gets or sets the target region.
         */
        targetRegion: string;
        /**
         * Gets or sets the version of move collection.
         */
        version?: string;
    }

    /**
     * Defines the move collection errors.
     */
    export interface MoveCollectionPropertiesResponseErrors {
        /**
         * The move resource error body.
         */
        properties?: MoveResourceErrorBodyResponse;
    }

    /**
     * Defines the dependency override of the move resource.
     */
    export interface MoveResourceDependencyOverrideResponse {
        /**
         * Gets or sets the ARM ID of the dependent resource.
         */
        id?: string;
        /**
         * Gets or sets the resource ARM id of either the MoveResource or the resource ARM ID of
         * the dependent resource.
         */
        targetId?: string;
    }

    /**
     * Defines the dependency of the move resource.
     */
    export interface MoveResourceDependencyResponse {
        /**
         * Defines the properties for automatic resolution.
         */
        automaticResolution?: AutomaticResolutionPropertiesResponse;
        /**
         * Defines the dependency type.
         */
        dependencyType?: string;
        /**
         * Gets the source ARM ID of the dependent resource.
         */
        id?: string;
        /**
         * Gets or sets a value indicating whether the dependency is optional.
         */
        isOptional?: string;
        /**
         * Defines the properties for manual resolution.
         */
        manualResolution?: ManualResolutionPropertiesResponse;
        /**
         * Gets the dependency resolution status.
         */
        resolutionStatus?: string;
        /**
         * Defines the resolution type.
         */
        resolutionType?: string;
    }

    /**
     * An error response from the Azure Migrate service.
     */
    export interface MoveResourceErrorBodyResponse {
        /**
         * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
         */
        code: string;
        /**
         * A list of additional details about the error.
         */
        details: MoveResourceErrorBodyResponse[];
        /**
         * A message describing the error, intended to be suitable for display in a user interface.
         */
        message: string;
        /**
         * The target of the particular error. For example, the name of the property in error.
         */
        target: string;
    }

    /**
     * An error response from the azure resource mover service.
     */
    export interface MoveResourceErrorResponse {
        /**
         * The move resource error body.
         */
        properties?: MoveResourceErrorBodyResponse;
    }

    /**
     * Defines the move resource properties.
     */
    export interface MoveResourcePropertiesResponse {
        /**
         * Gets or sets the move resource dependencies.
         */
        dependsOn: MoveResourceDependencyResponse[];
        /**
         * Gets or sets the move resource dependencies overrides.
         */
        dependsOnOverrides?: MoveResourceDependencyOverrideResponse[];
        /**
         * Defines the move resource errors.
         */
        errors: MoveResourcePropertiesResponseErrors;
        /**
         * Gets or sets the existing target ARM Id of the resource.
         */
        existingTargetId?: string;
        /**
         * Gets a value indicating whether the resolve action is required over the move collection.
         */
        isResolveRequired: boolean;
        /**
         * Defines the move resource status.
         */
        moveStatus: MoveResourcePropertiesResponseMoveStatus;
        /**
         * Defines the provisioning states.
         */
        provisioningState: string;
        /**
         * Gets or sets the resource settings.
         */
        resourceSettings?: AvailabilitySetResourceSettingsResponse | DiskEncryptionSetResourceSettingsResponse | KeyVaultResourceSettingsResponse | LoadBalancerResourceSettingsResponse | NetworkInterfaceResourceSettingsResponse | NetworkSecurityGroupResourceSettingsResponse | PublicIPAddressResourceSettingsResponse | ResourceGroupResourceSettingsResponse | SqlDatabaseResourceSettingsResponse | SqlElasticPoolResourceSettingsResponse | SqlServerResourceSettingsResponse | VirtualMachineResourceSettingsResponse | VirtualNetworkResourceSettingsResponse;
        /**
         * Gets or sets the Source ARM Id of the resource.
         */
        sourceId: string;
        /**
         * Gets or sets the source resource settings.
         */
        sourceResourceSettings: AvailabilitySetResourceSettingsResponse | DiskEncryptionSetResourceSettingsResponse | KeyVaultResourceSettingsResponse | LoadBalancerResourceSettingsResponse | NetworkInterfaceResourceSettingsResponse | NetworkSecurityGroupResourceSettingsResponse | PublicIPAddressResourceSettingsResponse | ResourceGroupResourceSettingsResponse | SqlDatabaseResourceSettingsResponse | SqlElasticPoolResourceSettingsResponse | SqlServerResourceSettingsResponse | VirtualMachineResourceSettingsResponse | VirtualNetworkResourceSettingsResponse;
        /**
         * Gets or sets the Target ARM Id of the resource.
         */
        targetId: string;
    }

    /**
     * Defines the move resource errors.
     */
    export interface MoveResourcePropertiesResponseErrors {
        /**
         * The move resource error body.
         */
        properties?: MoveResourceErrorBodyResponse;
    }

    /**
     * Defines the move resource status.
     */
    export interface MoveResourcePropertiesResponseMoveStatus {
        /**
         * An error response from the azure resource mover service.
         */
        errors?: MoveResourceErrorResponse;
        /**
         * Defines the job status.
         */
        jobStatus?: JobStatusResponse;
        /**
         * Defines the MoveResource states.
         */
        moveState: string;
    }

    /**
     * Defines the network interface resource settings.
     */
    export interface NetworkInterfaceResourceSettingsResponse {
        /**
         * Gets or sets a value indicating whether accelerated networking is enabled.
         */
        enableAcceleratedNetworking?: boolean;
        /**
         * Gets or sets the IP configurations of the NIC.
         */
        ipConfigurations?: NicIpConfigurationResourceSettingsResponse[];
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/networkInterfaces'.
         */
        resourceType: "Microsoft.Network/networkInterfaces";
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
    }

    /**
     * Defines the NSG resource settings.
     */
    export interface NetworkSecurityGroupResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/networkSecurityGroups'.
         */
        resourceType: "Microsoft.Network/networkSecurityGroups";
        /**
         * Gets or sets Security rules of network security group.
         */
        securityRules?: NsgSecurityRuleResponse[];
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
    }

    /**
     * Defines NIC IP configuration properties.
     */
    export interface NicIpConfigurationResourceSettingsResponse {
        /**
         * Gets or sets the references of the load balancer backend address pools.
         */
        loadBalancerBackendAddressPools?: LoadBalancerBackendAddressPoolReferenceResponse[];
        /**
         * Gets or sets the references of the load balancer NAT rules.
         */
        loadBalancerNatRules?: LoadBalancerNatRuleReferenceResponse[];
        /**
         * Gets or sets the IP configuration name.
         */
        name?: string;
        /**
         * Gets or sets a value indicating whether this IP configuration is the primary.
         */
        primary?: boolean;
        /**
         * Gets or sets the private IP address of the network interface IP Configuration.
         */
        privateIpAddress?: string;
        /**
         * Gets or sets the private IP address allocation method.
         */
        privateIpAllocationMethod?: string;
        /**
         * Defines reference to a public IP.
         */
        publicIp?: PublicIpReferenceResponse;
        /**
         * Defines reference to subnet.
         */
        subnet?: SubnetReferenceResponse;
    }

    /**
     * Defines reference to NSG.
     */
    export interface NsgReferenceResponse {
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: string;
    }

    /**
     * Security Rule data model for Network Security Groups.
     */
    export interface NsgSecurityRuleResponse {
        /**
         * Gets or sets whether network traffic is allowed or denied.
         * Possible values are “Allow” and “Deny”.
         */
        access?: string;
        /**
         * Gets or sets a description for this rule. Restricted to 140 chars.
         */
        description?: string;
        /**
         * Gets or sets destination address prefix. CIDR or source IP range.
         *  A “*” can also be used to match all source IPs. Default tags such
         * as ‘VirtualNetwork’, ‘AzureLoadBalancer’ and ‘Internet’ can also be used.
         */
        destinationAddressPrefix?: string;
        /**
         * Gets or sets Destination Port or Range. Integer or range between
         * 0 and 65535. A “*” can also be used to match all ports.
         */
        destinationPortRange?: string;
        /**
         * Gets or sets the direction of the rule.InBound or Outbound. The
         * direction specifies if rule will be evaluated on incoming or outgoing traffic.
         */
        direction?: string;
        /**
         * Gets or sets the Security rule name.
         */
        name?: string;
        /**
         * Gets or sets the priority of the rule. The value can be between
         * 100 and 4096. The priority number must be unique for each rule in the collection.
         * The lower the priority number, the higher the priority of the rule.
         */
        priority?: number;
        /**
         * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
         */
        protocol?: string;
        /**
         * Gets or sets source address prefix. CIDR or source IP range. A
         * “*” can also be used to match all source IPs.  Default tags such as ‘VirtualNetwork’,
         * ‘AzureLoadBalancer’ and ‘Internet’ can also be used. If this is an ingress
         * rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: string;
        /**
         * Gets or sets Source Port or Range. Integer or range between 0 and
         * 65535. A “*” can also be used to match all ports.
         */
        sourcePortRange?: string;
    }

    /**
     * Defines the public IP address resource settings.
     */
    export interface PublicIPAddressResourceSettingsResponse {
        /**
         * Gets or sets the domain name label.
         */
        domainNameLabel?: string;
        /**
         * Gets or sets the fully qualified domain name.
         */
        fqdn?: string;
        /**
         * Gets or sets public IP allocation method.
         */
        publicIpAllocationMethod?: string;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/publicIPAddresses'.
         */
        resourceType: "Microsoft.Network/publicIPAddresses";
        /**
         * Gets or sets public IP sku.
         */
        sku?: string;
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
        /**
         * Gets or sets public IP zones.
         */
        zones?: string;
    }

    /**
     * Defines reference to a public IP.
     */
    export interface PublicIpReferenceResponse {
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: string;
    }

    /**
     * Defines the resource group resource settings.
     */
    export interface ResourceGroupResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'resourceGroups'.
         */
        resourceType: "resourceGroups";
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
    }

    /**
     * Defines the Sql Database resource settings.
     */
    export interface SqlDatabaseResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Sql/servers/databases'.
         */
        resourceType: "Microsoft.Sql/servers/databases";
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
        /**
         * Defines the zone redundant resource setting.
         */
        zoneRedundant?: string;
    }

    /**
     * Defines the Sql ElasticPool resource settings.
     */
    export interface SqlElasticPoolResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Sql/servers/elasticPools'.
         */
        resourceType: "Microsoft.Sql/servers/elasticPools";
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
        /**
         * Defines the zone redundant resource setting.
         */
        zoneRedundant?: string;
    }

    /**
     * Defines the SQL Server resource settings.
     */
    export interface SqlServerResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Sql/servers'.
         */
        resourceType: "Microsoft.Sql/servers";
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
    }

    /**
     * Defines reference to subnet.
     */
    export interface SubnetReferenceResponse {
        /**
         * Gets the name of the proxy resource on the target side.
         */
        name?: string;
        /**
         * Gets the ARM resource ID of the tracked resource being referenced.
         */
        sourceArmResourceId: string;
    }

    /**
     * Defines the virtual network subnets resource settings.
     */
    export interface SubnetResourceSettingsResponse {
        /**
         * Gets or sets address prefix for the subnet.
         */
        addressPrefix?: string;
        /**
         * Gets or sets the Subnet name.
         */
        name?: string;
        /**
         * Defines reference to NSG.
         */
        networkSecurityGroup?: NsgReferenceResponse;
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
     * Gets or sets the virtual machine resource settings.
     */
    export interface VirtualMachineResourceSettingsResponse {
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Compute/virtualMachines'.
         */
        resourceType: "Microsoft.Compute/virtualMachines";
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target availability set id for virtual machines not in an availability set at source.
         */
        targetAvailabilitySetId?: string;
        /**
         * Gets or sets the target availability zone.
         */
        targetAvailabilityZone?: string;
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
        /**
         * Gets or sets the target virtual machine size.
         */
        targetVmSize?: string;
        /**
         * Gets or sets user-managed identities
         */
        userManagedIdentities?: string[];
    }

    /**
     * Defines the virtual network resource settings.
     */
    export interface VirtualNetworkResourceSettingsResponse {
        /**
         * Gets or sets the address prefixes for the virtual network.
         */
        addressSpace?: string[];
        /**
         * Gets or sets DHCPOptions that contains an array of DNS servers available to VMs
         * deployed in the virtual network.
         */
        dnsServers?: string[];
        /**
         * Gets or sets a value indicating whether gets or sets whether the
         * DDOS protection should be switched on.
         */
        enableDdosProtection?: boolean;
        /**
         * The resource type. For example, the value can be Microsoft.Compute/virtualMachines.
         * Expected value is 'Microsoft.Network/virtualNetworks'.
         */
        resourceType: "Microsoft.Network/virtualNetworks";
        /**
         * Gets or sets List of subnets in a VirtualNetwork.
         */
        subnets?: SubnetResourceSettingsResponse[];
        /**
         * Gets or sets the Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Gets or sets the target resource group name.
         */
        targetResourceGroupName?: string;
        /**
         * Gets or sets the target Resource name.
         */
        targetResourceName: string;
    }
