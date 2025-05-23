import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security Application over a given scope
 *
 * Uses Azure REST API version 2022-07-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-07-01-preview.
 */
export class SecurityConnectorApplication extends pulumi.CustomResource {
    /**
     * Get an existing SecurityConnectorApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityConnectorApplication {
        return new SecurityConnectorApplication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:SecurityConnectorApplication';

    /**
     * Returns true if the given object is an instance of SecurityConnectorApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityConnectorApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityConnectorApplication.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * description of the application
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * display name of the application
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The application source, what it affects, e.g. Assessments
     */
    public readonly sourceResourceType!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SecurityConnectorApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityConnectorApplicationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.securityConnectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityConnectorName'");
            }
            if ((!args || args.sourceResourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceResourceType'");
            }
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityConnectorName"] = args ? args.securityConnectorName : undefined;
            resourceInputs["sourceResourceType"] = args ? args.sourceResourceType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sourceResourceType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20220701preview:SecurityConnectorApplication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityConnectorApplication.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityConnectorApplication resource.
 */
export interface SecurityConnectorApplicationArgs {
    /**
     * The security Application key - unique key for the standard application
     */
    applicationId?: pulumi.Input<string>;
    /**
     * description of the application
     */
    description?: pulumi.Input<string>;
    /**
     * display name of the application
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
    /**
     * The application source, what it affects, e.g. Assessments
     */
    sourceResourceType: pulumi.Input<string | types.enums.ApplicationSourceResourceType>;
}