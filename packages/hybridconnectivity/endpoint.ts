import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The endpoint for the target resource.
 *
 * Uses Azure REST API version 2024-12-01. In version 2.x of the Azure Native provider, it used API version 2023-03-15.
 *
 * Other available API versions: 2023-03-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridconnectivity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Endpoint {
        return new Endpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridconnectivity:Endpoint';

    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Endpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Endpoint.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource Id of the connectivity endpoint (optional).
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridconnectivity/v20211006preview:Endpoint" }, { type: "azure-native:hybridconnectivity/v20220501preview:Endpoint" }, { type: "azure-native:hybridconnectivity/v20230315:Endpoint" }, { type: "azure-native:hybridconnectivity/v20241201:Endpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Endpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * The endpoint name.
     */
    endpointName?: pulumi.Input<string>;
    /**
     * The resource Id of the connectivity endpoint (optional).
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The type of endpoint.
     */
    type: pulumi.Input<string | types.enums.Type>;
}