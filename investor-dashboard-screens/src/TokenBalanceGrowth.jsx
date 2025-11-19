// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// export default function TokenBalanceGrowth() {
//   const data = [
//     { name: "Q1", value: 12000, shadow: 47000 },
//     { name: "Q2", value: 18000, shadow: 47000 },
//     { name: "Q3", value: 35000, shadow: 47000 },
//     { name: "Q4", value: 30000, shadow: 47000 },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length > 0) {
//       return (
//         <div
//           style={{
//             background: "#0A1A45",
//             padding: "10px 14px",
//             borderRadius: 12,
//             color: "white",
//             fontSize: 14,
//             boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
//           }}
//         >
//           <div style={{ fontWeight: 600 }}>{label}</div>
//           <div>ROI: ${payload[0].value.toLocaleString()}</div>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         background: "white",
//         borderRadius: 20,
//         padding: 28,
//         boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* HEADER */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: 18,
//           alignItems: "center",
//         }}
//       >
//         <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
//           <div
//             style={{
//               background: "#E7F2FF",
//               padding: 12,
//               borderRadius: 12,
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M4 17L10 11L14 15L20 9"
//                 stroke="#0094FF"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <circle cx="20" cy="9" r="2" fill="#0094FF" />
//               <circle cx="14" cy="15" r="2" fill="#0094FF" />
//               <circle cx="10" cy="11" r="2" fill="#0094FF" />
//               <circle cx="4" cy="17" r="2" fill="#0094FF" />
//             </svg>
//           </div>

//           <div>
//             <div style={{ fontSize: 22, fontWeight: 700, color: "#1A2634" }}>
//               Token Balance Growth
//             </div>
//             <div style={{ fontSize: 14, color: "#748096", marginTop: 2 }}>
//               6-month trend of total token value
//             </div>
//           </div>
//         </div>

//         {/* ACTION BUTTONS */}
//         <div
//           style={{
//             display: "flex",
//             gap: 10,
//             background: "white",
//             padding: "8px 14px",
//             borderRadius: 14,
//             border: "1px solid #E5EAF2",
//           }}
//         >
//           <div style={{ cursor: "pointer" }}>⤢</div>
//           <div style={{ cursor: "pointer" }}>✎</div>
//           <div style={{ cursor: "pointer" }}>⋯</div>
//         </div>
//       </div>

//       {/* CHART */}
//       <div style={{ width: "100%", height: 340 }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data} barSize={70}>
//             {/* GRADIENTS */}
//             <defs>
//               <linearGradient id="shadowGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#CDE9FF" stopOpacity={0.7} />
//                 <stop offset="100%" stopColor="#CDE9FF" stopOpacity={0} />
//               </linearGradient>

//               <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#3BB8FF" />
//                 <stop offset="100%" stopColor="#0094FF" />
//               </linearGradient>
//             </defs>

//             <CartesianGrid
//               strokeDasharray="4 4"
//               stroke="#DDE6EE"
//               vertical={false}
//             />

//             <XAxis
//               dataKey="name"
//               tick={{ fill: "#8B95A5", fontSize: 14 }}
//               axisLine={false}
//               tickLine={false}
//             />

//             <YAxis
//               tick={{ fill: "#8B95A5", fontSize: 14 }}
//               axisLine={false}
//               tickLine={false}
//               tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
//             />

//             <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0 }} />

//             {/* SHADOW BARS (top faded part) */}
//             <Bar
//               dataKey="shadow"
//               fill="url(#shadowGrad)"
//               radius={[20, 20, 20, 20]}
//             />

//             {/* MAIN BARS */}
//             <Bar dataKey="value" fill="url(#barGrad)" radius={[20, 20, 20, 20]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
