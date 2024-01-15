/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface PricingGroupAdd200ResponseAllOfDataInner { 
    groupName?: string | null;
    /**
     * Generated from the group name if not provided
     */
    groupDescription?: string | null;
    /**
     * An amount in the smallest denomination (e.g. cents/pence)
     */
    groupUnitPrice?: number | null;
}

