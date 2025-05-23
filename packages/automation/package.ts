import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the Package type.
 *
 * Uses Azure REST API version 2023-05-15-preview. In version 2.x of the Azure Native provider, it used API version 2023-05-15-preview.
 *
 * Other available API versions: 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Package extends pulumi.CustomResource {
    /**
     * Get an existing Package resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Package {
        return new Package(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:Package';

    /**
     * Returns true if the given object is an instance of Package.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Package {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Package.__pulumiType;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public readonly allOf!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the contentLink of the Package.
     */
    public readonly contentLink!: pulumi.Output<types.outputs.ContentLinkResponse | undefined>;
    /**
     * Gets or sets the isGlobal flag of the package.
     */
    public /*out*/ readonly default!: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the error info of the Package.
     */
    public /*out*/ readonly error!: pulumi.Output<types.outputs.PackageErrorInfoResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state of the Package.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets the size in bytes of the Package.
     */
    public /*out*/ readonly sizeInBytes!: pulumi.Output<number | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets the version of the Package.
     */
    public /*out*/ readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Package resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PackageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.contentLink === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentLink'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.runtimeEnvironmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runtimeEnvironmentName'");
            }
            resourceInputs["allOf"] = args ? args.allOf : undefined;
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["contentLink"] = args ? args.contentLink : undefined;
            resourceInputs["packageName"] = args ? args.packageName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runtimeEnvironmentName"] = args ? args.runtimeEnvironmentName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["allOf"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contentLink"] = undefined /*out*/;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20230515preview:Package" }, { type: "azure-native:automation/v20241023:Package" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Package.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Package resource.
 */
export interface PackageArgs {
    /**
     * The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location'
     */
    allOf?: pulumi.Input<types.inputs.TrackedResourceArgs>;
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the package content link.
     */
    contentLink: pulumi.Input<types.inputs.ContentLinkArgs>;
    /**
     * The name of Package.
     */
    packageName?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Runtime Environment.
     */
    runtimeEnvironmentName: pulumi.Input<string>;
}