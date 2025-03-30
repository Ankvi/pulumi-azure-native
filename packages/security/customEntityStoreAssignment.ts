import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Custom entity store assignment
 *
 * Uses Azure REST API version 2021-07-01-preview. In version 1.x of the Azure Native provider, it used API version 2021-07-01-preview.
 */
export class CustomEntityStoreAssignment extends pulumi.CustomResource {
    /**
     * Get an existing CustomEntityStoreAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomEntityStoreAssignment {
        return new CustomEntityStoreAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:CustomEntityStoreAssignment';

    /**
     * Returns true if the given object is an instance of CustomEntityStoreAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomEntityStoreAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomEntityStoreAssignment.__pulumiType;
    }

    /**
     * The link to entity store database.
     */
    public /*out*/ readonly entityStoreDatabaseLink!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principal assigned with entity store. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId]
     */
    public readonly principal!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CustomEntityStoreAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomEntityStoreAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["customEntityStoreAssignmentName"] = args ? args.customEntityStoreAssignmentName : undefined;
            resourceInputs["principal"] = args ? args.principal : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["entityStoreDatabaseLink"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["entityStoreDatabaseLink"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principal"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20210701preview:CustomEntityStoreAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomEntityStoreAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomEntityStoreAssignment resource.
 */
export interface CustomEntityStoreAssignmentArgs {
    /**
     * Name of the custom entity store assignment. Generated name is GUID.
     */
    customEntityStoreAssignmentName?: pulumi.Input<string>;
    /**
     * The principal assigned with entity store. If not provided, will use caller principal. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId]
     */
    principal?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}