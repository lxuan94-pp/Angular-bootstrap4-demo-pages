import { User } from '../models';

export const USERS: User[] = [
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'Xuan',
        firstName: 'Liu',
        middleName: 'None',
        birthDate: '06/18/97',
        riceID: 'S02349817',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'active',
        // recordBool: true,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'Yes',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test1',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '123',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '123',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '123',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'User',
        firstName: 'Test',
        middleName: 'None',
        birthDate: '01/08/97',
        riceID: 'S01339800',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'inactive',
        // recordBool: false,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'Yes',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test2',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: false,
                locked: false,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'deleted',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'abc',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'abc',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'abc',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'User2',
        firstName: 'Test2',
        middleName: 'None',
        birthDate: '01/08/97',
        riceID: 'S01339801',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'inactive',
        // recordBool: false,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'No',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test3',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '!~.',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '!~.',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '!~.',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'User3',
        firstName: 'Test3',
        middleName: 'None',
        birthDate: '08/01/97',
        riceID: 'S07832478',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'active',
        // recordBool: true,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'Yes',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test4',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '890',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '890',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '890',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'User4',
        firstName: 'Test4',
        middleName: 'None',
        birthDate: '07/08/97',
        riceID: 'S01333379',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'inactive',
        // recordBool: true,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'No',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test5',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '567',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '567',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: '567',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'Abby',
        firstName: 'Green',
        middleName: 'None',
        birthDate: '07/08/87',
        riceID: 'S01332379',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'active',
        // recordBool: true,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'Yes',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test6',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'mno',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'mno',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'mno',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'User5',
        firstName: 'Test6',
        middleName: 'None',
        birthDate: '07/08/97',
        riceID: 'S01322378',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'inactive',
        // recordBool: true,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'No',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test7',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'kfc',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'kfc',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'kfc',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'User6',
        firstName: 'Test6',
        middleName: 'None',
        birthDate: '09/02/88',
        riceID: 'S01237829',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'active',
        // recordBool: true,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'Yes',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test8',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'rice',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'rice',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'rice',
            },
        ],
    },
    {
        command: 'view',
        commandUrl: '../account',
        lastName: 'User7',
        firstName: 'Test8',
        middleName: 'None',
        birthDate: '19/12/20',
        riceID: 'S01311366',
        instanceID: 'None',
        instanceStatus: 'Primary',
        recordStatus: 'active',
        // recordBool: true,
        relationCode: 'student',
        relationDetailCode: 'None',
        registered: 'No',
        viewStatus: 'CONFIDENTIAL',
        mailServer: 'Campus Mail Server (cyrus2p.mall.rice.edu',
        prefix: 'Ms',
        suffix: '',
        nickName: '',
        maidenName: '',
        ssn: '0000',
        gender: 'F',
        college: 'Management',
        accountRegisteredOn: '2010-09-04',
        netIDPWLastChange: '2020-04-05',
        kerberosLastAuthFailure: '',
        kerberosAutoLockResetTime: '',
        kerberosFailedPWAttempts: 0,
        kerberosAutoLockStatus: false,
        Source: 'banner',
        account: 'xxxtgu2',
        Name: 'test9',
        UnixUID: '35155',
        primaryEmail: 'Tester.G.User@rice.edu',
        messageList: [
            {
                select: true,
                locked: true,
                domain: 'owlnet',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'ready',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'iam',
            },
            {
                select: true,
                locked: false,
                domain: 'duo',
                domainType: 'unix',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'pending',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'iam',
            },
            {
                select: false,
                locked: false,
                domain: 'rice',
                domainType: 'ad',
                accountName: 'xxxtgu2',
                accountType: 'user',
                linkStatus: 'local',
                accountStatus: 'enabled',
                accountState: 'ready',
                UNIXUID: '35516',
                password: 'iam',
            },
        ],
    },
];
