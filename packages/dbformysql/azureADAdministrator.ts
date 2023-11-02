import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Administrator.
 * Azure REST API version: 2022-01-01.
 *
 * Other available API versions: 2023-06-01-preview, 2023-06-30.
 */
export class AzureADAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing AzureADAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureADAdministrator {
        return new AzureADAdministrator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbformysql:AzureADAdministrator';

    /**
     * Returns true if the given object is an instance of AzureADAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureADAdministrator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureADAdministrator.__pulumiType;
    }

    /**
     * Type of the sever administrator.
     */
    public readonly administratorType!: pulumi.Output<string | undefined>;
    /**
     * The resource id of the identity used for AAD Authentication.
     */
    public readonly identityResourceId!: pulumi.Output<string | undefined>;
    /**
     * Login name of the server administrator.
     */
    public readonly login!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * SID (object ID) of the server administrator.
     */
    public readonly sid!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tenant ID of the administrator.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AzureADAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureADAdministratorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["administratorName"] = args ? args.administratorName : undefined;
            resourceInputs["administratorType"] = args ? args.administratorType : undefined;
            resourceInputs["identityResourceId"] = args ? args.identityResourceId : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sid"] = args ? args.sid : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorType"] = undefined /*out*/;
            resourceInputs["identityResourceId"] = undefined /*out*/;
            resourceInputs["login"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbformysql/v20211201preview:AzureADAdministrator" }, { type: "azure-native:dbformysql/v20220101:AzureADAdministrator" }, { type: "azure-native:dbformysql/v20230601preview:AzureADAdministrator" }, { type: "azure-native:dbformysql/v20230630:AzureADAdministrator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AzureADAdministrator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AzureADAdministrator resource.
 */
export interface AzureADAdministratorArgs {
    /**
     * The name of the Azure AD Administrator.
     */
    administratorName?: pulumi.Input<string>;
    /**
     * Type of the sever administrator.
     */
    administratorType?: pulumi.Input<string | types.enums.AdministratorType>;
    /**
     * The resource id of the identity used for AAD Authentication.
     */
    identityResourceId?: pulumi.Input<string>;
    /**
     * Login name of the server administrator.
     */
    login?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * SID (object ID) of the server administrator.
     */
    sid?: pulumi.Input<string>;
    /**
     * Tenant ID of the administrator.
     */
    tenantId?: pulumi.Input<string>;
}
