import { workers, teams } from "../Statistic/StatisticMockData";

export const KPIMockData = [
    {
        id: 1,
        name: "Lắp xong điện cầu thang tầng 1",
        deadline: "25/8/2022",
        allTask: 9,
        completed: 5,
        manager: teams[0].leader
    },
    {
        id: 2,
        name: "Lắp xong điện bếp khu dân cư B",
        deadline: "16/9/2022",
        allTask: 10,
        completed: 8,
        manager: teams[1].leader
    },
    {
        id: 3,
        name: "Lắp xong điện nhà xe C",
        deadline: "1/8/2023",
        allTask: 6,
        completed: 3,
        manager: teams[2].leader
    },
    {
        id: 4,
        name: "Sửa cầu giao khu E",
        deadline: "6/6/2022",
        allTask: 9,
        completed: 8,
        manager: teams[3].leader
    },
    {
        id: 5,
        name: "Lắp đặt điện điều hòa tầng 3",
        deadline: "25/8/2022",
        allTask: 3,
        completed: 1,
        manager: teams[4].leader
    },
    {
        id: 6,
        name: "Sửa sự cố thông gió",
        deadline: "25/8/2022",
        allTask: 8,
        completed: 3,
        manager: teams[5].leader
    },
]

export const jobDataRows = [
    {
        id: 1,
        jobOrder: 1,
        jobName: 'Lắp đèn 1',
        jobStatus: 1,
        workers: workers[0].name
    },
    {
        id: 1,
        jobOrder: 2,
        jobName: 'Lắp đèn 2',
        jobStatus: 0,
        workers: workers[1].name
    },
    {
        id: 1,
        jobOrder: 3,
        jobName: 'Lắp đèn 3',
        jobStatus: 1,
        workers: workers[2].name
    },
    {
        id: 1,
        jobOrder: 4,
        jobName: 'Lắp đèn 4',
        jobStatus: 1,
        workers: workers[2].name
    },
    {
        id: 1,
        jobOrder: 5,
        jobName: 'Lắp đèn 5',
        jobStatus: 0,
        workers: workers[0].name
    },
    {
        id: 1,
        jobOrder: 6,
        jobName: 'Lắp đèn 6',
        jobStatus: 0,
        workers: workers[1].name
    },
    {
        id: 1,
        jobOrder: 7,
        jobName: 'Lắp đèn 7',
        jobStatus: 0,
        workers: workers[1].name
    },
    {
        id: 1,
        jobOrder: 8,
        jobName: 'Lắp đèn 8',
        jobStatus: 1,
        workers: workers[0].name
    },
    {
        id: 1,
        jobOrder: 9,
        jobName: 'Lắp đèn 9',
        jobStatus: 1,
        workers: workers[2].name
    },


    {
        id: 2,
        jobOrder: 1,
        jobName: 'Lắp đèn 1',
        jobStatus: 1,
        workers: workers[3].name
    },
    {
        id: 2,
        jobOrder: 2,
        jobName: 'Lắp đèn 2',
        jobStatus: 0,
        workers: workers[4].name
    },
    {
        id: 2,
        jobOrder: 3,
        jobName: 'Lắp đèn 3',
        jobStatus: 0,
        workers: workers[5].name
    },
    {
        id: 2,
        jobOrder: 4,
        jobName: 'Lắp đèn 4',
        jobStatus: 1,
        workers: workers[4].name
    },
    {
        id: 2,
        jobOrder: 5,
        jobName: 'Lắp đèn 5',
        jobStatus: 1,
        workers: workers[5].name
    },
    {
        id: 2,
        jobOrder: 6,
        jobName: 'Lắp đèn 6',
        jobStatus: 1,
        workers: workers[5].name
    },
    {
        id: 2,
        jobOrder: 7,
        jobName: 'Lắp đèn 7',
        jobStatus: 1,
        workers: workers[3].name
    },
    {
        id: 2,
        jobOrder: 8,
        jobName: 'Lắp đèn 8',
        jobStatus: 1,
        workers: workers[4].name
    },
    {
        id: 2,
        jobOrder: 9,
        jobName: 'Lắp đèn 9',
        jobStatus: 1,
        workers: workers[5].name
    },
    {
        id: 2,
        jobOrder: 10,
        jobName: 'Lắp đèn 10',
        jobStatus: 1,
        workers: workers[3].name
    },


    {
        id: 3,
        jobOrder: 1,
        jobName: 'Lắp đèn 1',
        jobStatus: 1,
        workers: workers[6].name
    },
    {
        id: 3,
        jobOrder: 2,
        jobName: 'Lắp đèn 2',
        jobStatus: 1,
        workers: workers[6].name
    },
    {
        id: 3,
        jobOrder: 3,
        jobName: 'Lắp đèn 3',
        jobStatus: 1,
        workers: workers[7].name
    },
    {
        id: 3,
        jobOrder: 4,
        jobName: 'Lắp đèn 4',
        jobStatus: 0,
        workers: workers[7].name
    },
    {
        id: 3,
        jobOrder: 5,
        jobName: 'Lắp đèn 5',
        jobStatus: 0,
        workers: workers[7].name
    },
    {
        id: 3,
        jobOrder: 6,
        jobName: 'Lắp đèn 6',
        jobStatus: 0,
        workers: workers[6].name
    },

    {
        id: 4,
        jobOrder: 1,
        jobName: 'Sửa cầu giao 1',
        jobStatus: 1,
        workers: workers[8].name
    },
    {
        id: 4,
        jobOrder: 2,
        jobName: 'Sửa cầu giao 2',
        jobStatus: 1,
        workers: workers[9].name
    },
    {
        id: 4,
        jobOrder: 3,
        jobName: 'Sửa cầu giao 3',
        jobStatus: 1,
        workers: workers[10].name
    },
    {
        id: 4,
        jobOrder: 4,
        jobName: 'Sửa cầu giao 4',
        jobStatus: 1,
        workers: workers[11].name
    },
    {
        id: 4,
        jobOrder: 5,
        jobName: 'Sửa cầu giao 5',
        jobStatus: 1,
        workers: workers[9].name
    },
    {
        id: 4,
        jobOrder: 6,
        jobName: 'Sửa cầu giao 6',
        jobStatus: 1,
        workers: workers[8].name
    },
    {
        id: 4,
        jobOrder: 7,
        jobName: 'Sửa cầu giao 7',
        jobStatus: 1,
        workers: workers[10].name
    },
    {
        id: 4,
        jobOrder: 8,
        jobName: 'Sửa cầu giao 8',
        jobStatus: 1,
        workers: workers[11].name
    },
    {
        id: 4,
        jobOrder: 9,
        jobName: 'Sửa cầu giao 9',
        jobStatus: 0,
        workers: workers[10].name
    },


    {
        id: 5,
        jobOrder: 1,
        jobName: 'Lắp điều hòa 1',
        jobStatus: 1,
        workers: workers[14].name
    },
    {
        id: 5,
        jobOrder: 2,
        jobName: 'Lắp điều hòa 2',
        jobStatus: 0,
        workers: workers[12].name
    },
    {
        id: 5,
        jobOrder: 3,
        jobName: 'Lắp điều hòa 3',
        jobStatus: 0,
        workers: workers[13].name
    },


    {
        id: 6,
        jobOrder: 1,
        jobName: 'Lắp quạt thông gió 1',
        jobStatus: 1,
        workers: workers[15].name
    },
    {
        id: 6,
        jobOrder: 2,
        jobName: 'Lắp quạt thông gió 2',
        jobStatus: 0,
        workers: workers[16].name
    },
    {
        id: 6,
        jobOrder: 3,
        jobName: 'Lắp quạt thông gió 3',
        jobStatus: 0,
        workers: workers[17].name
    },
    {
        id: 6,
        jobOrder: 4,
        jobName: 'Lắp quạt thông gió 4',
        jobStatus: 0,
        workers: workers[18].name
    },
    {
        id: 6,
        jobOrder: 5,
        jobName: 'Lắp quạt thông gió 5',
        jobStatus: 0,
        workers: workers[19].name
    },
    {
        id: 6,
        jobOrder: 6,
        jobName: 'Lắp quạt thông gió 6',
        jobStatus: 0,
        workers: workers[19].name
    },
    {
        id: 6,
        jobOrder: 7,
        jobName: 'Lắp quạt thông gió 7',
        jobStatus: 1,
        workers: workers[17].name
    },
    {
        id: 6,
        jobOrder: 8,
        jobName: 'Lắp quạt thông gió 8',
        jobStatus: 1,
        workers: workers[18].name
    },
]