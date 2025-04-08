import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An access policy is used to grant users and applications access to the environment. Roles are assigned to service principals in Azure Active Directory. These roles define the actions the principal can perform through the Time Series Insights data plane APIs.
 *
 * Uses Azure REST API version 2020-05-15. In version 1.x of the Azure Native provider, it used API version 2020-05-15.
 *
 * Other available API versions: 2021-06-30-preview.
 */
export class AccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccessPolicy {
        return new AccessPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:timeseriesinsights:AccessPolicy';

    /**
     * Returns true if the given object is an instance of AccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessPolicy.__pulumiType;
    }

    /**
     * An description of the access policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The objectId of the principal in Azure Active Directory.
     */
    public readonly principalObjectId!: pulumi.Output<string | undefined>;
    /**
     * The list of roles the principal is assigned on the environment.
     */
    public readonly roles!: pulumi.Output<string[] | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessPolicyName"] = args ? args.accessPolicyName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["principalObjectId"] = args ? args.principalObjectId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalObjectId"] = undefined /*out*/;
            resourceInputs["roles"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:timeseriesinsights/v20170228preview:AccessPolicy" }, { type: "azure-native:timeseriesinsights/v20171115:AccessPolicy" }, { type: "azure-native:timeseriesinsights/v20180815preview:AccessPolicy" }, { type: "azure-native:timeseriesinsights/v20200515:AccessPolicy" }, { type: "azure-native:timeseriesinsights/v20210331preview:AccessPolicy" }, { type: "azure-native:timeseriesinsights/v20210630preview:AccessPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccessPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessPolicy resource.
 */
export interface AccessPolicyArgs {
    /**
     * Name of the access policy.
     */
    accessPolicyName?: pulumi.Input<string>;
    /**
     * An description of the access policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The objectId of the principal in Azure Active Directory.
     */
    principalObjectId?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The list of roles the principal is assigned on the environment.
     */
    roles?: pulumi.Input<pulumi.Input<string | types.enums.AccessPolicyRole>[]>;
}