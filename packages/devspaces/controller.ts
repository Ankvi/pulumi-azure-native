import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2019-04-01. In version 2.x of the Azure Native provider, it used API version 2019-04-01.
 */
export class Controller extends pulumi.CustomResource {
    /**
     * Get an existing Controller resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Controller {
        return new Controller(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devspaces:Controller';

    /**
     * Returns true if the given object is an instance of Controller.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Controller {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Controller.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * DNS name for accessing DataPlane services
     */
    public /*out*/ readonly dataPlaneFqdn!: pulumi.Output<string>;
    /**
     * DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
     */
    public /*out*/ readonly hostSuffix!: pulumi.Output<string>;
    /**
     * Region where the Azure resource is located.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the Azure Dev Spaces Controller.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Model representing SKU for Azure Dev Spaces Controller.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Tags for the Azure resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * DNS of the target container host's API server
     */
    public /*out*/ readonly targetContainerHostApiServerFqdn!: pulumi.Output<string>;
    /**
     * Resource ID of the target container host
     */
    public readonly targetContainerHostResourceId!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Controller resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ControllerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            if ((!args || args.targetContainerHostCredentialsBase64 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetContainerHostCredentialsBase64'");
            }
            if ((!args || args.targetContainerHostResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetContainerHostResourceId'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetContainerHostCredentialsBase64"] = args ? args.targetContainerHostCredentialsBase64 : undefined;
            resourceInputs["targetContainerHostResourceId"] = args ? args.targetContainerHostResourceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataPlaneFqdn"] = undefined /*out*/;
            resourceInputs["hostSuffix"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["targetContainerHostApiServerFqdn"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataPlaneFqdn"] = undefined /*out*/;
            resourceInputs["hostSuffix"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetContainerHostApiServerFqdn"] = undefined /*out*/;
            resourceInputs["targetContainerHostResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devspaces/v20190401:Controller" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Controller.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Controller resource.
 */
export interface ControllerArgs {
    /**
     * Region where the Azure resource is located.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Model representing SKU for Azure Dev Spaces Controller.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Tags for the Azure resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Credentials of the target container host (base64).
     */
    targetContainerHostCredentialsBase64: pulumi.Input<string>;
    /**
     * Resource ID of the target container host
     */
    targetContainerHostResourceId: pulumi.Input<string>;
}