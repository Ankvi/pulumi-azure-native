import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class representing a SenderUsername resource.
 */
export class SenderUsername extends pulumi.CustomResource {
    /**
     * Get an existing SenderUsername resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SenderUsername {
        return new SenderUsername(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:communication/v20230601preview:SenderUsername';

    /**
     * Returns true if the given object is an instance of SenderUsername.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SenderUsername {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SenderUsername.__pulumiType;
    }

    /**
     * The location where the SenderUsername resource data is stored at rest.
     */
    public /*out*/ readonly dataLocation!: pulumi.Output<string>;
    /**
     * The display name for the senderUsername.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource. Unknown is the default state for Communication Services.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A sender senderUsername to be used when sending emails.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a SenderUsername resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SenderUsernameArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.emailServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["emailServiceName"] = args ? args.emailServiceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["senderUsername"] = args ? args.senderUsername : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["username"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:communication:SenderUsername" }, { type: "azure-native:communication/v20230301preview:SenderUsername" }, { type: "azure-native:communication/v20230331:SenderUsername" }, { type: "azure-native:communication/v20230401preview:SenderUsername" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SenderUsername.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SenderUsername resource.
 */
export interface SenderUsernameArgs {
    /**
     * The display name for the senderUsername.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the Domains resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The valid sender Username.
     */
    senderUsername?: pulumi.Input<string>;
    /**
     * A sender senderUsername to be used when sending emails.
     */
    username: pulumi.Input<string>;
}
