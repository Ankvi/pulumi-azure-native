import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX DNS Zone
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2020-07-17-preview.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export class WorkloadNetworkDnsZone extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadNetworkDnsZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadNetworkDnsZone {
        return new WorkloadNetworkDnsZone(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:WorkloadNetworkDnsZone';

    /**
     * Returns true if the given object is an instance of WorkloadNetworkDnsZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadNetworkDnsZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadNetworkDnsZone.__pulumiType;
    }

    /**
     * Display name of the DNS Zone.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * DNS Server IP array of the DNS Zone.
     */
    public readonly dnsServerIps!: pulumi.Output<string[] | undefined>;
    /**
     * Number of DNS Services using the DNS zone.
     */
    public readonly dnsServices!: pulumi.Output<number | undefined>;
    /**
     * Domain names of the DNS Zone.
     */
    public readonly domain!: pulumi.Output<string[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * NSX revision number.
     */
    public readonly revision!: pulumi.Output<number | undefined>;
    /**
     * Source IP of the DNS Zone.
     */
    public readonly sourceIp!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadNetworkDnsZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadNetworkDnsZoneArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["dnsServerIps"] = args ? args.dnsServerIps : undefined;
            resourceInputs["dnsServices"] = args ? args.dnsServices : undefined;
            resourceInputs["dnsZoneId"] = args ? args.dnsZoneId : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["revision"] = args ? args.revision : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["dnsServerIps"] = undefined /*out*/;
            resourceInputs["dnsServices"] = undefined /*out*/;
            resourceInputs["domain"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["sourceIp"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200717preview:WorkloadNetworkDnsZone" }, { type: "azure-native:avs/v20210101preview:WorkloadNetworkDnsZone" }, { type: "azure-native:avs/v20210601:WorkloadNetworkDnsZone" }, { type: "azure-native:avs/v20211201:WorkloadNetworkDnsZone" }, { type: "azure-native:avs/v20220501:WorkloadNetworkDnsZone" }, { type: "azure-native:avs/v20230301:WorkloadNetworkDnsZone" }, { type: "azure-native:avs/v20230901:WorkloadNetworkDnsZone" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkDnsZone.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkDnsZone resource.
 */
export interface WorkloadNetworkDnsZoneArgs {
    /**
     * Display name of the DNS Zone.
     */
    displayName?: pulumi.Input<string>;
    /**
     * DNS Server IP array of the DNS Zone.
     */
    dnsServerIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Number of DNS Services using the DNS zone.
     */
    dnsServices?: pulumi.Input<number>;
    /**
     * NSX DNS Zone identifier. Generally the same as the DNS Zone's display name
     */
    dnsZoneId?: pulumi.Input<string>;
    /**
     * Domain names of the DNS Zone.
     */
    domain?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * NSX revision number.
     */
    revision?: pulumi.Input<number>;
    /**
     * Source IP of the DNS Zone.
     */
    sourceIp?: pulumi.Input<string>;
}