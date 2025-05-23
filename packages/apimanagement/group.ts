import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contract details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Group {
        return new Group(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:Group';

    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Group {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Group.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
     */
    public /*out*/ readonly builtIn!: pulumi.Output<boolean>;
    /**
     * Group description. Can contain HTML formatting tags.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Group name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
     */
    public readonly externalId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["externalId"] = args ? args.externalId : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["builtIn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["builtIn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20160707:Group" }, { type: "azure-native:apimanagement/v20161010:Group" }, { type: "azure-native:apimanagement/v20170301:Group" }, { type: "azure-native:apimanagement/v20180101:Group" }, { type: "azure-native:apimanagement/v20180601preview:Group" }, { type: "azure-native:apimanagement/v20190101:Group" }, { type: "azure-native:apimanagement/v20191201:Group" }, { type: "azure-native:apimanagement/v20191201preview:Group" }, { type: "azure-native:apimanagement/v20200601preview:Group" }, { type: "azure-native:apimanagement/v20201201:Group" }, { type: "azure-native:apimanagement/v20210101preview:Group" }, { type: "azure-native:apimanagement/v20210401preview:Group" }, { type: "azure-native:apimanagement/v20210801:Group" }, { type: "azure-native:apimanagement/v20211201preview:Group" }, { type: "azure-native:apimanagement/v20220401preview:Group" }, { type: "azure-native:apimanagement/v20220801:Group" }, { type: "azure-native:apimanagement/v20220901preview:Group" }, { type: "azure-native:apimanagement/v20230301preview:Group" }, { type: "azure-native:apimanagement/v20230501preview:Group" }, { type: "azure-native:apimanagement/v20230901preview:Group" }, { type: "azure-native:apimanagement/v20240501:Group" }, { type: "azure-native:apimanagement/v20240601preview:Group" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Group.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * Group description.
     */
    description?: pulumi.Input<string>;
    /**
     * Group name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
     */
    externalId?: pulumi.Input<string>;
    /**
     * Group identifier. Must be unique in the current API Management service instance.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Group type.
     */
    type?: pulumi.Input<types.enums.GroupType>;
}