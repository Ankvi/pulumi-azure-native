import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a and external administrator to be created.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export class SingleServerServerAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing SingleServerServerAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SingleServerServerAdministrator {
        return new SingleServerServerAdministrator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbformysql:SingleServerServerAdministrator';

    /**
     * Returns true if the given object is an instance of SingleServerServerAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SingleServerServerAdministrator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SingleServerServerAdministrator.__pulumiType;
    }

    /**
     * The type of administrator.
     */
    public readonly administratorType!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The server administrator login account name.
     */
    public readonly login!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The server administrator Sid (Secure ID).
     */
    public readonly sid!: pulumi.Output<string>;
    /**
     * The server Active Directory Administrator tenant id.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SingleServerServerAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SingleServerServerAdministratorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.administratorType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'administratorType'");
            }
            if ((!args || args.login === undefined) && !opts.urn) {
                throw new Error("Missing required property 'login'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.sid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sid'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["administratorType"] = args ? args.administratorType : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sid"] = args ? args.sid : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["login"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sid"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbformysql/v20171201:ServerAdministrator" }, { type: "azure-native:dbformysql/v20171201:SingleServerServerAdministrator" }, { type: "azure-native:dbformysql/v20171201preview:SingleServerServerAdministrator" }, { type: "azure-native:dbformysql/v20180601privatepreview:ServerAdministrator" }, { type: "azure-native:dbformysql/v20180601privatepreview:SingleServerServerAdministrator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SingleServerServerAdministrator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SingleServerServerAdministrator resource.
 */
export interface SingleServerServerAdministratorArgs {
    /**
     * The type of administrator.
     */
    administratorType: pulumi.Input<string | types.enums.AdministratorType>;
    /**
     * The server administrator login account name.
     */
    login: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The server administrator Sid (Secure ID).
     */
    sid: pulumi.Input<string>;
    /**
     * The server Active Directory Administrator tenant id.
     */
    tenantId: pulumi.Input<string>;
}