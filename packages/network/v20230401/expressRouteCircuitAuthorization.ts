import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Authorization in an ExpressRouteCircuit resource.
 */
export class ExpressRouteCircuitAuthorization extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitAuthorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitAuthorization {
        return new ExpressRouteCircuitAuthorization(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230401:ExpressRouteCircuitAuthorization';

    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitAuthorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRouteCircuitAuthorization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRouteCircuitAuthorization.__pulumiType;
    }

    /**
     * The authorization key.
     */
    public readonly authorizationKey!: pulumi.Output<string | undefined>;
    /**
     * The authorization use status.
     */
    public readonly authorizationUseStatus!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the authorization resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ExpressRouteCircuitAuthorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitAuthorizationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.circuitName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'circuitName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authorizationKey"] = args ? args.authorizationKey : undefined;
            resourceInputs["authorizationName"] = args ? args.authorizationName : undefined;
            resourceInputs["authorizationUseStatus"] = args ? args.authorizationUseStatus : undefined;
            resourceInputs["circuitName"] = args ? args.circuitName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["authorizationUseStatus"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20150501preview:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20150615:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20160330:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20160601:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20160901:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20161201:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20170301:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20170601:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20170801:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20170901:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20171001:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20171101:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20180101:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20180201:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20180401:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20180601:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20180701:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20180801:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20181001:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20181101:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20181201:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20190201:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20190401:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20190601:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20190701:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20190801:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20190901:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20191101:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20191201:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20200301:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20200401:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20200501:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20200601:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20200701:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20200801:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20201101:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20210201:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20210301:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20210501:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20210801:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20220101:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20220501:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20220701:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20220901:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20221101:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20230201:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20230501:ExpressRouteCircuitAuthorization" }, { type: "azure-native:network/v20230601:ExpressRouteCircuitAuthorization" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRouteCircuitAuthorization.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRouteCircuitAuthorization resource.
 */
export interface ExpressRouteCircuitAuthorizationArgs {
    /**
     * The authorization key.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * The name of the authorization.
     */
    authorizationName?: pulumi.Input<string>;
    /**
     * The authorization use status.
     */
    authorizationUseStatus?: pulumi.Input<string | types.enums.AuthorizationUseStatus>;
    /**
     * The name of the express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
