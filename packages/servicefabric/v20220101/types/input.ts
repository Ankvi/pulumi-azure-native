import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
     */
    export interface ApplicationTypeVersionsCleanupPolicyArgs {
        /**
         * Number of unused versions per application type to keep.
         */
        maxUnusedVersionsToKeep: pulumi.Input<number>;
    }

    /**
     * The settings to enable AAD authentication on the cluster.
     */
    export interface AzureActiveDirectoryArgs {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: pulumi.Input<string>;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: pulumi.Input<string>;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Client certificate definition.
     */
    export interface ClientCertificateArgs {
        /**
         * Certificate common name.
         */
        commonName?: pulumi.Input<string>;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: pulumi.Input<boolean>;
        /**
         * Issuer thumbprint for the certificate. Only used together with CommonName.
         */
        issuerThumbprint?: pulumi.Input<string>;
        /**
         * Certificate thumbprint.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * IPTag associated with the object.
     */
    export interface IPTagArgs {
        /**
         * The IP tag type.
         */
        ipTagType: pulumi.Input<string>;
        /**
         * The value of the IP tag.
         */
        tag: pulumi.Input<string>;
    }

    /**
     * Describes a load balancing rule.
     */
    export interface LoadBalancingRuleArgs {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: pulumi.Input<number>;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
         */
        frontendPort: pulumi.Input<number>;
        /**
         * The load distribution policy for this rule.
         */
        loadDistribution?: pulumi.Input<string>;
        /**
         * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
         */
        probePort?: pulumi.Input<number>;
        /**
         * the reference to the load balancer probe used by the load balancing rule.
         */
        probeProtocol: pulumi.Input<string | enums.ProbeProtocol>;
        /**
         * The probe request path. Only supported for HTTP/HTTPS probes.
         */
        probeRequestPath?: pulumi.Input<string>;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: pulumi.Input<string | enums.Protocol>;
    }

    /**
     * Describes a network security rule.
     */
    export interface NetworkSecurityRuleArgs {
        /**
         * The network traffic is allowed or denied.
         */
        access: pulumi.Input<string | enums.Access>;
        /**
         * Network security rule description.
         */
        description?: pulumi.Input<string>;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: pulumi.Input<string>;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: pulumi.Input<string>;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Network security rule direction.
         */
        direction: pulumi.Input<string | enums.Direction>;
        /**
         * Network security rule name.
         */
        name: pulumi.Input<string>;
        /**
         * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: pulumi.Input<number>;
        /**
         * Network protocol this rule applies to.
         */
        protocol: pulumi.Input<string | enums.NsgProtocol>;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: pulumi.Input<string>;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: pulumi.Input<string>;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointArgs {
        /**
         * A list of locations.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The type of the endpoint service.
         */
        service: pulumi.Input<string>;
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionArgs {
        /**
         * The parameter name of fabric setting.
         */
        name: pulumi.Input<string>;
        /**
         * The parameter value of fabric setting.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionArgs {
        /**
         * The section name of the fabric settings.
         */
        name: pulumi.Input<string>;
        /**
         * The collection of parameters in the section.
         */
        parameters: pulumi.Input<pulumi.Input<SettingsParameterDescriptionArgs>[]>;
    }

    /**
     * Service Fabric managed cluster Sku definition
     */
    export interface SkuArgs {
        /**
         * Sku Name.
         */
        name: pulumi.Input<string | enums.SkuName>;
    }

    /**
     * Describes a Subnet.
     */
    export interface SubnetArgs {
        /**
         * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
         */
        enableIpv6?: pulumi.Input<boolean>;
        /**
         * Subnet name.
         */
        name: pulumi.Input<string>;
        /**
         * Full resource id for the network security group.
         */
        networkSecurityGroupId?: pulumi.Input<string>;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: pulumi.Input<string | enums.PrivateEndpointNetworkPolicies>;
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.PrivateLinkServiceNetworkPolicies>;
    }
