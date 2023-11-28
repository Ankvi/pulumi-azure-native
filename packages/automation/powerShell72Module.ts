import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the module type.
 * Azure REST API version: 2023-11-01.
 */
export class PowerShell72Module extends pulumi.CustomResource {
    /**
     * Get an existing PowerShell72Module resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PowerShell72Module {
        return new PowerShell72Module(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:PowerShell72Module';

    /**
     * Returns true if the given object is an instance of PowerShell72Module.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PowerShell72Module {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PowerShell72Module.__pulumiType;
    }

    /**
     * Gets the activity count of the module.
     */
    public /*out*/ readonly activityCount!: pulumi.Output<number | undefined>;
    /**
     * Gets the creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    public /*out*/ readonly description!: pulumi.Output<string | undefined>;
    /**
     * Gets the error info of the module.
     */
    public /*out*/ readonly error!: pulumi.Output<types.outputs.ModuleErrorInfoResponse | undefined>;
    /**
     * Gets the etag of the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Gets type of module, if its composite or not.
     */
    public /*out*/ readonly isComposite!: pulumi.Output<boolean | undefined>;
    /**
     * Gets the isGlobal flag of the module.
     */
    public /*out*/ readonly isGlobal!: pulumi.Output<boolean | undefined>;
    /**
     * Gets the last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the module.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Gets the size in bytes of the module.
     */
    public /*out*/ readonly sizeInBytes!: pulumi.Output<number | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets the version of the module.
     */
    public /*out*/ readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a PowerShell72Module resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PowerShell72ModuleArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["contentLink"] = args ? args.contentLink : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["moduleName"] = args ? args.moduleName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["activityCount"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isComposite"] = undefined /*out*/;
            resourceInputs["isGlobal"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["activityCount"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isComposite"] = undefined /*out*/;
            resourceInputs["isGlobal"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20231101:PowerShell72Module" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PowerShell72Module.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PowerShell72Module resource.
 */
export interface PowerShell72ModuleArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Sets the hash.
     */
    contentLink: pulumi.Input<types.inputs.ContentLinkArgs>;
    /**
     * Sets the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of module.
     */
    moduleName?: pulumi.Input<string>;
    /**
     * Sets name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sets the tags attached to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
