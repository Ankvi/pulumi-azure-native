import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Azure Active Directory only authentication.
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export class ManagedInstanceAzureADOnlyAuthentication extends pulumi.CustomResource {
    /**
     * Get an existing ManagedInstanceAzureADOnlyAuthentication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedInstanceAzureADOnlyAuthentication {
        return new ManagedInstanceAzureADOnlyAuthentication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:ManagedInstanceAzureADOnlyAuthentication';

    /**
     * Returns true if the given object is an instance of ManagedInstanceAzureADOnlyAuthentication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedInstanceAzureADOnlyAuthentication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedInstanceAzureADOnlyAuthentication.__pulumiType;
    }

    /**
     * Azure Active Directory only Authentication enabled.
     */
    public readonly azureADOnlyAuthentication!: pulumi.Output<boolean>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedInstanceAzureADOnlyAuthentication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedInstanceAzureADOnlyAuthenticationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.azureADOnlyAuthentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureADOnlyAuthentication'");
            }
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authenticationName"] = args ? args.authenticationName : undefined;
            resourceInputs["azureADOnlyAuthentication"] = args ? args.azureADOnlyAuthentication : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureADOnlyAuthentication"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20200202preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20200801preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20201101preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20210201preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20210501preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20210801preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20211101:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20211101preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20220201preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20220501preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20220801preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20221101preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20230201preview:ManagedInstanceAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20230501preview:ManagedInstanceAzureADOnlyAuthentication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedInstanceAzureADOnlyAuthentication.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedInstanceAzureADOnlyAuthentication resource.
 */
export interface ManagedInstanceAzureADOnlyAuthenticationArgs {
    /**
     * The name of server azure active directory only authentication.
     */
    authenticationName?: pulumi.Input<string>;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    azureADOnlyAuthentication: pulumi.Input<boolean>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}