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
import { Document } from './document';
import { LeaseType } from './leaseType';


export interface Lease { 
    leaseId: string;
    contactId: string;
    signedOn: string;
    expiresAt: string;
    unitId: string;
    leaseTypeId: number;
    leaseType: LeaseType;
    document: Document;
    intendedMoveOutDate: string;
}

