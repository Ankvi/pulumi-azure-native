import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
     */
    export interface ApplicationTypeVersionsCleanupPolicyResponse {
        /**
         * Number of unused versions per application type to keep.
         */
        maxUnusedVersionsToKeep: number;
    }

    /**
     * The settings to enable AAD authentication on the cluster.
     */
    export interface AzureActiveDirectoryResponse {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: string;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: string;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: string;
    }

    /**
     * Client certificate definition.
     */
    export interface ClientCertificateResponse {
        /**
         * Certificate common name.
         */
        commonName?: string;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: boolean;
        /**
         * Issuer thumbprint for the certificate. Only used together with CommonName.
         */
        issuerThumbprint?: string;
        /**
         * Certificate thumbprint.
         */
        thumbprint?: string;
    }

    /**
     * IPTag associated with the object.
     */
    export interface IPTagResponse {
        /**
         * The IP tag type.
         */
        ipTagType: string;
        /**
         * The value of the IP tag.
         */
        tag: string;
    }

    /**
     * Describes a load balancing rule.
     */
    export interface LoadBalancingRuleResponse {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: number;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
         */
        frontendPort: number;
        /**
         * The load distribution policy for this rule.
         */
        loadDistribution?: string;
        /**
         * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
         */
        probePort?: number;
        /**
         * the reference to the load balancer probe used by the load balancing rule.
         */
        probeProtocol: string;
        /**
         * The probe request path. Only supported for HTTP/HTTPS probes.
         */
        probeRequestPath?: string;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: string;
    }

    /**
     * Describes a network security rule.
     */
    export interface NetworkSecurityRuleResponse {
        /**
         * The network traffic is allowed or denied.
         */
        access: string;
        /**
         * Network security rule description.
         */
        description?: string;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: string;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: string[];
        /**
         * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: string[];
        /**
         * Network security rule direction.
         */
        direction: string;
        /**
         * Network security rule name.
         */
        name: string;
        /**
         * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: number;
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: string;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: string[];
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: string;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: string[];
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointResponse {
        /**
         * A list of locations.
         */
        locations?: string[];
        /**
         * The type of the endpoint service.
         */
        service: string;
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionResponse {
        /**
         * The parameter name of fabric setting.
         */
        name: string;
        /**
         * The parameter value of fabric setting.
         */
        value: string;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionResponse {
        /**
         * The section name of the fabric settings.
         */
        name: string;
        /**
         * The collection of parameters in the section.
         */
        parameters: SettingsParameterDescriptionResponse[];
    }

    /**
     * Service Fabric managed cluster Sku definition
     */
    export interface SkuResponse {
        /**
         * Sku Name.
         */
        name: string;
    }

    /**
     * Describes a Subnet.
     */
    export interface SubnetResponse {
        /**
         * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
         */
        enableIpv6?: boolean;
        /**
         * Subnet name.
         */
        name: string;
        /**
         * Full resource id for the network security group.
         */
        networkSecurityGroupId?: string;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: string;
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: string;
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
         * The timestamp of resource last modification (UTC).
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
