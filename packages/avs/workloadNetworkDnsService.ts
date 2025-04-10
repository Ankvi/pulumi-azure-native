import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX DNS Service
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2020-07-17-preview.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export class WorkloadNetworkDnsService extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadNetworkDnsService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadNetworkDnsService {
        return new WorkloadNetworkDnsService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:WorkloadNetworkDnsService';

    /**
     * Returns true if the given object is an instance of WorkloadNetworkDnsService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadNetworkDnsService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadNetworkDnsService.__pulumiType;
    }

    /**
     * Default DNS zone of the DNS Service.
     */
    public readonly defaultDnsZone!: pulumi.Output<string | undefined>;
    /**
     * Display name of the DNS Service.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * DNS service IP of the DNS Service.
     */
    public readonly dnsServiceIp!: pulumi.Output<string | undefined>;
    /**
     * FQDN zones of the DNS Service.
     */
    public readonly fqdnZones!: pulumi.Output<string[] | undefined>;
    /**
     * DNS Service log level.
     */
    public readonly logLevel!: pulumi.Output<string | undefined>;
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
     * DNS Service status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadNetworkDnsService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadNetworkDnsServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["defaultDnsZone"] = args ? args.defaultDnsZone : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["dnsServiceId"] = args ? args.dnsServiceId : undefined;
            resourceInputs["dnsServiceIp"] = args ? args.dnsServiceIp : undefined;
            resourceInputs["fqdnZones"] = args ? args.fqdnZones : undefined;
            resourceInputs["logLevel"] = args ? args.logLevel : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["revision"] = args ? args.revision : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["defaultDnsZone"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["dnsServiceIp"] = undefined /*out*/;
            resourceInputs["fqdnZones"] = undefined /*out*/;
            resourceInputs["logLevel"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200717preview:WorkloadNetworkDnsService" }, { type: "azure-native:avs/v20210101preview:WorkloadNetworkDnsService" }, { type: "azure-native:avs/v20210601:WorkloadNetworkDnsService" }, { type: "azure-native:avs/v20211201:WorkloadNetworkDnsService" }, { type: "azure-native:avs/v20220501:WorkloadNetworkDnsService" }, { type: "azure-native:avs/v20230301:WorkloadNetworkDnsService" }, { type: "azure-native:avs/v20230901:WorkloadNetworkDnsService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkDnsService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkDnsService resource.
 */
export interface WorkloadNetworkDnsServiceArgs {
    /**
     * Default DNS zone of the DNS Service.
     */
    defaultDnsZone?: pulumi.Input<string>;
    /**
     * Display name of the DNS Service.
     */
    displayName?: pulumi.Input<string>;
    /**
     * NSX DNS Service identifier. Generally the same as the DNS Service's display name
     */
    dnsServiceId?: pulumi.Input<string>;
    /**
     * DNS service IP of the DNS Service.
     */
    dnsServiceIp?: pulumi.Input<string>;
    /**
     * FQDN zones of the DNS Service.
     */
    fqdnZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS Service log level.
     */
    logLevel?: pulumi.Input<string | types.enums.DnsServiceLogLevelEnum>;
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
}