import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The test base image definition resource.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 */
export class ImageDefinition extends pulumi.CustomResource {
    /**
     * Get an existing ImageDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ImageDefinition {
        return new ImageDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:testbase:ImageDefinition';

    /**
     * Returns true if the given object is an instance of ImageDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImageDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImageDefinition.__pulumiType;
    }

    /**
     * Custom image architecture.
     */
    public readonly architecture!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Custom image OS state.
     */
    public readonly osState!: pulumi.Output<string>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Custom image security type.
     */
    public readonly securityType!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ImageDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.architecture === undefined) && !opts.urn) {
                throw new Error("Missing required property 'architecture'");
            }
            if ((!args || args.osState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osState'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.securityType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityType'");
            }
            if ((!args || args.testBaseAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testBaseAccountName'");
            }
            resourceInputs["architecture"] = args ? args.architecture : undefined;
            resourceInputs["imageDefinitionName"] = args ? args.imageDefinitionName : undefined;
            resourceInputs["osState"] = args ? args.osState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityType"] = args ? args.securityType : undefined;
            resourceInputs["testBaseAccountName"] = args ? args.testBaseAccountName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["architecture"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["securityType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:testbase/v20231101preview:ImageDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ImageDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ImageDefinition resource.
 */
export interface ImageDefinitionArgs {
    /**
     * Custom image architecture.
     */
    architecture: pulumi.Input<string | types.enums.ImageArchitecture>;
    /**
     * The resource name of the test base image definition.
     */
    imageDefinitionName?: pulumi.Input<string>;
    /**
     * Custom image OS state.
     */
    osState: pulumi.Input<string | types.enums.ImageOSState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Custom image security type.
     */
    securityType: pulumi.Input<string | types.enums.ImageSecurityType>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}