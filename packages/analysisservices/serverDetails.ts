import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an instance of an Analysis Services resource.
 *
 * Uses Azure REST API version 2017-08-01. In version 2.x of the Azure Native provider, it used API version 2017-08-01.
 */
export class ServerDetails extends pulumi.CustomResource {
    /**
     * Get an existing ServerDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerDetails {
        return new ServerDetails(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:analysisservices:ServerDetails';

    /**
     * Returns true if the given object is an instance of ServerDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerDetails {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerDetails.__pulumiType;
    }

    /**
     * A collection of AS server administrators
     */
    public readonly asAdministrators!: pulumi.Output<types.outputs.ServerAdministratorsResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The SAS container URI to the backup container.
     */
    public readonly backupBlobContainerUri!: pulumi.Output<string | undefined>;
    /**
     * The gateway details configured for the AS server.
     */
    public readonly gatewayDetails!: pulumi.Output<types.outputs.GatewayDetailsResponse | undefined>;
    /**
     * The firewall settings for the AS server.
     */
    public readonly ipV4FirewallSettings!: pulumi.Output<types.outputs.IPv4FirewallSettingsResponse | undefined>;
    /**
     * Location of the Analysis Services resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The managed mode of the server (0 = not managed, 1 = managed).
     */
    public readonly managedMode!: pulumi.Output<number | undefined>;
    /**
     * The name of the Analysis Services resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * How the read-write server's participation in the query pool is controlled.<br/>It can have the following values: <ul><li>readOnly - indicates that the read-write server is intended not to participate in query operations</li><li>all - indicates that the read-write server can participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in error.
     */
    public readonly querypoolConnectionMode!: pulumi.Output<string | undefined>;
    /**
     * The full name of the Analysis Services resource.
     */
    public /*out*/ readonly serverFullName!: pulumi.Output<string>;
    /**
     * The server monitor mode for AS server
     */
    public readonly serverMonitorMode!: pulumi.Output<number | undefined>;
    /**
     * The SKU of the Analysis Services resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.ResourceSkuResponse>;
    /**
     * The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the Analysis Services resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerDetailsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["asAdministrators"] = args ? args.asAdministrators : undefined;
            resourceInputs["backupBlobContainerUri"] = args ? args.backupBlobContainerUri : undefined;
            resourceInputs["gatewayDetails"] = args ? args.gatewayDetails : undefined;
            resourceInputs["ipV4FirewallSettings"] = args ? args.ipV4FirewallSettings : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedMode"] = (args ? args.managedMode : undefined) ?? 1;
            resourceInputs["querypoolConnectionMode"] = (args ? args.querypoolConnectionMode : undefined) ?? "All";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverMonitorMode"] = (args ? args.serverMonitorMode : undefined) ?? 1;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sku"] = args ? (args.sku ? pulumi.output(args.sku).apply(types.inputs.resourceSkuArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serverFullName"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["asAdministrators"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupBlobContainerUri"] = undefined /*out*/;
            resourceInputs["gatewayDetails"] = undefined /*out*/;
            resourceInputs["ipV4FirewallSettings"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["querypoolConnectionMode"] = undefined /*out*/;
            resourceInputs["serverFullName"] = undefined /*out*/;
            resourceInputs["serverMonitorMode"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:analysisservices/v20160516:ServerDetails" }, { type: "azure-native:analysisservices/v20170714:ServerDetails" }, { type: "azure-native:analysisservices/v20170801:ServerDetails" }, { type: "azure-native:analysisservices/v20170801beta:ServerDetails" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerDetails.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerDetails resource.
 */
export interface ServerDetailsArgs {
    /**
     * A collection of AS server administrators
     */
    asAdministrators?: pulumi.Input<types.inputs.ServerAdministratorsArgs>;
    /**
     * The SAS container URI to the backup container.
     */
    backupBlobContainerUri?: pulumi.Input<string>;
    /**
     * The gateway details configured for the AS server.
     */
    gatewayDetails?: pulumi.Input<types.inputs.GatewayDetailsArgs>;
    /**
     * The firewall settings for the AS server.
     */
    ipV4FirewallSettings?: pulumi.Input<types.inputs.IPv4FirewallSettingsArgs>;
    /**
     * Location of the Analysis Services resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The managed mode of the server (0 = not managed, 1 = managed).
     */
    managedMode?: pulumi.Input<number>;
    /**
     * How the read-write server's participation in the query pool is controlled.<br/>It can have the following values: <ul><li>readOnly - indicates that the read-write server is intended not to participate in query operations</li><li>all - indicates that the read-write server can participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in error.
     */
    querypoolConnectionMode?: pulumi.Input<types.enums.ConnectionMode>;
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The server monitor mode for AS server
     */
    serverMonitorMode?: pulumi.Input<number>;
    /**
     * The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
     */
    serverName?: pulumi.Input<string>;
    /**
     * The SKU of the Analysis Services resource.
     */
    sku: pulumi.Input<types.inputs.ResourceSkuArgs>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}