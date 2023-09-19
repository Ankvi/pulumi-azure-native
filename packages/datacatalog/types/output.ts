import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * User principals.
 */
export interface PrincipalsResponse {
    /**
     * Object Id for the user
     */
    objectId?: string;
    /**
     * UPN of the user.
     */
    upn?: string;
}
