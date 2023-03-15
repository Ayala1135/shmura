// const { attendance } = require("../models");

// const useres = await User.findAll({
//   include: [
//     {
//       model: db.attendance,
//       required: false,
//       where: {
//         dateAttendance: {
//           [Op.eq]: req.body.dateAttendance || Sequelize.col('db.attendance.dateAttendance')
//         }
//       }
//     },
//     {
//       model: Event,
//       required: false,
//       include: {
//         model: EType,
//         required: false,
//         where: {
//           E_T_CODE: {
//             [Op.eq]: Sequelize.col('EVENT.E_T_CODE')
//           }
//         }
//       },
//       where: {
//         M_N_NUM: {
//           [Op.eq]: SearchCases.M_N_NUM || Sequelize.col('EVENT.M_N_NUM')
//         }
//       }
//     },
//     {
//       model: Employee,
//       required: false,
//       where: {
//         PERNR: {
//           [Op.eq]: Sequelize.col('CASES.PERNR')
//         }
//       }
//     },
//     {
//       model: Color,
//       required: false,
//       where: {
//         COLOR_CODE: {
//           [Op.eq]: Sequelize.col('CASES.COLOR')
//         }
//       }
//     },
//     {
//       model: CrimeType,
//       required: false,
//       as: 'CRIME1',
//       where: {
//         CRIME_CODE: {
//           [Op.eq]: Sequelize.col('CASES.CRIME_1')
//         }
//       }
//     },
//     {
//       model: CrimeType,
//       required: false,
//       as: 'CRIME2',
//       where: {
//         CRIME_CODE: {
//           [Op.eq]: Sequelize.col('CASES.CRIME_2')
//         }
//       }
//     },
//     {
//       model: CrimeType,
//       required: false,
//       as: 'CRIME3',
//       where: {
//         CRIME_CODE: {
//           [Op.eq]: Sequelize.col('CASES.CRIME_3')
//         }
//       }
//     },
//     {
//       model: Closing,
//       required: false,
//       where: {
//         C_CODE: {
//           [Op.eq]: Sequelize.col('CASES.CLOSING')
//         }
//       }
//     }
//   ],
//   where: {
//     [Op.and]: [
//       {
//         [Op.or]: [
//           {
//             USER_CODE: {
//               [Op.in]: SearchCases.userCode || []
//             }
//           },
//           {
//             [Op.not]: Sequelize.col('USER.USER_CODE')
//           }
//         ]
//       },
//       {
//         [Op.or]: [
//           {
//             [Op.and]: [
//               {
//                 CRIME1: {
//                   [Op.not]: null
//                 },
//                 CRIME1: {
//                   CRIME_CODE: {
//                     [Op.in]: SearchCases.crimeTypes || []
//                   }
//                 }
//               }
//             ]
//           },
//           {
//             [Op.and]: [
//               {
//                 CRIME2: {
//                   [Op.not]: null
//                 },
//                 CRIME2: {
//                   CRIME_CODE: {
//                     [Op.in]: SearchCases.crimeTypes || []
//                   }
//                 }
//               }
//             ]
//           },
//           {
//             [Op.and]: [
//               {
//                 CRIME3: {
//                   [Op.not]: null
//                 },
//                 CRIME3: {
//                   CRIME_CODE: {
//                     [Op.in]: SearchCases.crimeTypes || []
//                   }
//                 }
//               }
//             ]
//           },
//           {
//             [Op.not]: Sequelize.col('CRIME1.CRIME_CODE'),
//             [Op.not]: Sequelize.col('CRIME2.CRIME_CODE'),
//             [Op.not]: Sequelize.col('CRIME3.CRIME_CODE')
//           }
//         ]
//       },
//       {
//         [Op.or]: [
//           {
//             M_N_NUM: {
//               [Op.eq]: SearchCases.M_N_NUM || Sequelize.col('EVENT.M_N_NUM')
