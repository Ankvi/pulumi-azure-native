import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The description of the DigitalTwins service.
 *
 * Uses Azure REST API version 2023-01-31. In version 2.x of the Azure Native provider, it used API version 2023-01-31.
 */
export class DigitalTwin extends pulumi.CustomResource {
    /**
     * Get an existing DigitalTwin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DigitalTwin {
        return new DigitalTwin(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:digitaltwins:DigitalTwin';

    /**
     * Returns true if the given object is an instance of DigitalTwin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DigitalTwin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DigitalTwin.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Time when DigitalTwinsInstance was created.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * Api endpoint to work with DigitalTwinsInstance.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The managed identity for the DigitalTwinsInstance.
     */
    public readonly identity!: pulumi.Output<types.outputs.DigitalTwinsIdentityResponse | undefined>;
    /**
     * Time when DigitalTwinsInstance was updated.
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The private endpoint connections.
     */
    public readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * The provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Public network access for the DigitalTwinsInstance.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the DigitalTwinsInstance.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DigitalTwin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DigitalTwinArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:digitaltwins/v20200301preview:DigitalTwin" }, { type: "azure-native:digitaltwins/v20201031:DigitalTwin" }, { type: "azure-native:digitaltwins/v20201201:DigitalTwin" }, { type: "azure-native:digitaltwins/v20210630preview:DigitalTwin" }, { type: "azure-native:digitaltwins/v20220531:DigitalTwin" }, { type: "azure-native:digitaltwins/v20221031:DigitalTwin" }, { type: "azure-native:digitaltwins/v20230131:DigitalTwin" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DigitalTwin.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DigitalTwin resource.
 */
export interface DigitalTwinArgs {
    /**
     * The managed identity for the DigitalTwinsInstance.
     */
    identity?: pulumi.Input<types.inputs.DigitalTwinsIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The private endpoint connections.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateEndpointConnectionArgs>[]>;
    /**
     * Public network access for the DigitalTwinsInstance.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}