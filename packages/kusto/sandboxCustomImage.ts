import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a Kusto sandbox custom image.
 *
 * Uses Azure REST API version 2024-04-13. In version 2.x of the Azure Native provider, it used API version 2023-08-15.
 *
 * Other available API versions: 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SandboxCustomImage extends pulumi.CustomResource {
    /**
     * Get an existing SandboxCustomImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SandboxCustomImage {
        return new SandboxCustomImage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:SandboxCustomImage';

    /**
     * Returns true if the given object is an instance of SandboxCustomImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SandboxCustomImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SandboxCustomImage.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The base image name on which the custom image is built on top of. It can be one of the LanguageExtensionImageName (e.g.: 'Python3_10_8', 'Python3_10_8_DL') or the name of an existing custom image. Either this property or languageVersion should be specified.
     */
    public readonly baseImageName!: pulumi.Output<string | undefined>;
    /**
     * The language name, for example Python.
     */
    public readonly language!: pulumi.Output<string>;
    /**
     * The version of the language. Either this property or baseImageName should be specified.
     */
    public readonly languageVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The requirements file content.
     */
    public readonly requirementsFileContent!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SandboxCustomImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SandboxCustomImageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.language === undefined) && !opts.urn) {
                throw new Error("Missing required property 'language'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["baseImageName"] = args ? args.baseImageName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["language"] = args ? args.language : undefined;
            resourceInputs["languageVersion"] = args ? args.languageVersion : undefined;
            resourceInputs["requirementsFileContent"] = args ? args.requirementsFileContent : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sandboxCustomImageName"] = args ? args.sandboxCustomImageName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["baseImageName"] = undefined /*out*/;
            resourceInputs["language"] = undefined /*out*/;
            resourceInputs["languageVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["requirementsFileContent"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20230815:SandboxCustomImage" }, { type: "azure-native:kusto/v20240413:SandboxCustomImage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SandboxCustomImage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SandboxCustomImage resource.
 */
export interface SandboxCustomImageArgs {
    /**
     * The base image name on which the custom image is built on top of. It can be one of the LanguageExtensionImageName (e.g.: 'Python3_10_8', 'Python3_10_8_DL') or the name of an existing custom image. Either this property or languageVersion should be specified.
     */
    baseImageName?: pulumi.Input<string>;
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The language name, for example Python.
     */
    language: pulumi.Input<string | types.enums.Language>;
    /**
     * The version of the language. Either this property or baseImageName should be specified.
     */
    languageVersion?: pulumi.Input<string>;
    /**
     * The requirements file content.
     */
    requirementsFileContent?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the sandbox custom image.
     */
    sandboxCustomImageName?: pulumi.Input<string>;
}