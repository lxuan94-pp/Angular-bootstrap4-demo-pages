export interface Country {
    [key: string]: string | number;
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
}

export interface Activity {
    [key: string]: string | number;
    id: number;
    date: string;
    eventIcon: string;
    eventText: string;
    eventLinkUrl: string;
    eventLinkText: string;
    time: string;
}

export interface User {
    // [key: string]: string | number | boolean | [];
    command: string;
    commandUrl: string;
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: string;
    riceID: string;
    instanceID: string;
    instanceStatus: string;
    recordStatus: string;
    // recordBool: boolean;
    relationCode: string;
    relationDetailCode: string;
    registered: string;
    //
    viewStatus: string;
    mailServer: string;
    prefix: string;
    suffix: string;
    nickName: string;
    maidenName: string;
    ssn: string;
    gender: string;
    college: string;
    accountRegisteredOn: string;
    netIDPWLastChange: string;
    kerberosLastAuthFailure: string;
    kerberosAutoLockResetTime: string;
    kerberosFailedPWAttempts: number;
    kerberosAutoLockStatus: boolean;
    //
    Source: string;
    account: string;
    Name: string;
    UnixUID: string;
    primaryEmail: string;
    messageList: Array<AccountItem>;
}
class AccountItem {
    select: boolean | undefined;
    locked: boolean | undefined;
    domain: string | undefined;
    domainType: string | undefined;
    accountName: string | undefined;
    accountType: string | undefined;
    linkStatus: string | undefined;
    accountStatus: string | undefined;
    accountState: string | undefined;
    UNIXUID: string | undefined;
    password: string | undefined;
}
