import { useState } from 'react'
import './App.css'
import { ArrowDown, ArrowUp, ArrowUpRight, ChevronRight, Command, CornerDownLeft, Search } from 'lucide-react'

function App() {
  const [input, setInput] = useState("");
  const change = (value: string) => {
    setInput(value);
    setToolsSearch(tools.filter(tool => tool.name.toLowerCase().includes(value.toLowerCase())));
    setTeamsSearch(teams.filter(team => team.name.toLowerCase().includes(value.toLowerCase())));
    setEmployeesSearch(employees.filter(employee => employee.name.toLowerCase().includes(value.toLowerCase())));
    setLocationsSearch(locations.filter(location => location.name.toLowerCase().includes(value.toLowerCase())));
  }

  const tools =[
    {
      name: "Monday.com",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 156"><path fill="#f62b54" d="M31.846 153.489a31.97 31.97 0 0 1-27.86-16.167a30.91 30.91 0 0 1 .875-31.823l57.373-90.096A31.99 31.99 0 0 1 90.556.015a31.93 31.93 0 0 1 27.41 16.896c5.349 10.113 4.68 22.28-1.725 31.774L58.904 138.78a31.98 31.98 0 0 1-27.058 14.709"/><path fill="#fc0" d="M130.256 153.488c-11.572 0-22.22-6.187-27.812-16.13a30.81 30.81 0 0 1 .875-31.737l57.264-89.89A31.94 31.94 0 0 1 188.93.016c11.669.255 22.244 6.782 27.592 16.993a30.81 30.81 0 0 1-2.066 31.92l-57.252 89.889a31.93 31.93 0 0 1-26.948 14.671"/><ellipse cx="226.466" cy="125.324" fill="#00ca72" rx="29.538" ry="28.918"/></svg>
    },
    {
      name: "Loom",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256"><path fill="#625df5" d="M256 113.765h-74.858l64.83-37.43l-14.237-24.667l-64.83 37.43l37.421-64.825l-24.667-14.246l-37.421 64.826V0h-28.476v74.86L76.326 10.027L51.667 24.266L89.096 89.09L24.265 51.668l-14.238 24.66l64.83 37.43H0v28.477h74.85l-64.823 37.43l14.238 24.667l64.824-37.423l-37.43 64.825l24.667 14.239l37.429-64.832V256h28.476v-74.853l37.422 64.826l24.665-14.239l-37.428-64.832l64.83 37.43l14.24-24.667l-64.825-37.423h74.85v-28.477zM128 166.73c-21.472 0-38.876-17.403-38.876-38.876S106.528 88.977 128 88.977s38.875 17.404 38.875 38.876c0 21.473-17.403 38.876-38.875 38.876"/></svg>
    },
    {
      name: "Asana",
      svg: <svg className="bg-[#f06a6a] rounded-full p-1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 237"><path fill="white" d="M200.325 125.27c-30.749 0-55.675 24.927-55.675 55.677s24.926 55.677 55.675 55.677S256 211.696 256 180.947c0-30.75-24.926-55.677-55.675-55.677m-144.65.005C24.927 125.275 0 150.197 0 180.947s24.927 55.677 55.675 55.677c30.75 0 55.678-24.928 55.678-55.677c0-30.75-24.928-55.672-55.678-55.672m128-69.6c0 30.75-24.927 55.68-55.674 55.68c-30.75 0-55.676-24.93-55.676-55.68C72.325 24.928 97.25 0 128 0c30.747 0 55.673 24.93 55.673 55.674"/></svg>
    }
  ];

  const teams = [
    {
      name: "Aurora Solutions",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256"><path fill="#f22e46" d="M256 127.998C256 198.696 198.694 256 127.997 256C57.304 256 0 198.696 0 127.998C0 57.305 57.304 0 127.997 0C198.694 0 256 57.305 256 127.998"/><path fill="#fff" d="m117.024 100.89l30.691 30.68c4.43 4.436 11.623 4.436 16.064 0c4.431-4.435 4.441-11.622 0-16.058L133.086 84.82c-21.961-21.966-57.455-22.32-79.882-1.116a10 10 0 0 0-.605.548c-.098.098-.178.202-.275.29c-.1.096-.202.182-.297.278a9 9 0 0 0-.54.597c-21.215 22.437-20.85 57.932 1.113 79.897L83.292 196c4.44 4.433 11.623 4.433 16.062 0c4.442-4.437 4.442-11.633.011-16.06l-30.693-30.691c-13.398-13.393-13.488-35.129-.278-48.637c13.506-13.21 35.23-13.114 48.63.279"/><path fill="#f5b1b2" d="M156.636 60.017c-4.435 4.437-4.435 11.623.012 16.059l30.681 30.693c13.39 13.392 13.477 35.125.268 48.636c-13.51 13.2-35.227 13.112-48.623-.282l-30.692-30.689c-4.438-4.437-11.633-4.437-16.066 0c-4.443 4.433-4.443 11.642 0 16.065l30.682 30.694c21.968 21.965 57.458 22.322 79.889 1.116c.208-.184.404-.355.61-.549c.094-.095.182-.192.273-.29c.1-.095.197-.183.29-.289c.197-.183.365-.384.54-.594c21.215-22.428 20.86-57.911-1.102-79.889l-30.692-30.682c-4.436-4.443-11.638-4.443-16.07.001"/></svg>
    },
    {
      name: "Pulse Medical",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256"><defs><linearGradient id="logosHeadlessuiIcon0" x1="35.871%" x2="60.314%" y1="7.224%" y2="115.988%"><stop offset="0%" stop-color="#66e3ff"/><stop offset="100%" stop-color="#7064f9"/></linearGradient><linearGradient id="logosHeadlessuiIcon1" x1="39.172%" x2="55.05%" y1="0%" y2="99.181%"><stop offset="0%" stop-color="#66e3ff"/><stop offset="100%" stop-color="#7064f9"/></linearGradient></defs><path fill="url(#logosHeadlessuiIcon0)" d="m50.699 159.089l156.225-52.153c-3.122-19.523-5.346-32.565-7.924-42.518c-2.777-10.706-4.978-13.57-5.842-14.563a30.5 30.5 0 0 0-10.973-7.969c-1.216-.52-4.625-1.728-15.654-1.064c-11.669.704-26.987 3.088-51.245 6.929c-24.25 3.84-39.56 6.313-50.87 9.241c-10.7 2.777-13.573 4.985-14.566 5.85a30.6 30.6 0 0 0-7.963 10.97c-.52 1.215-1.729 4.624-1.064 15.658c.704 11.665 3.089 26.988 6.93 51.24c1.073 6.8 2.041 12.882 2.946 18.379"/><path fill="url(#logosHeadlessuiIcon1)" d="M7.625 147.063c-7.427-46.92-11.149-70.38-3.098-89.214a71.1 71.1 0 0 1 18.6-25.605c15.423-13.466 38.88-17.178 85.796-24.611C155.854.19 179.313-3.521 198.16 4.528a71.1 71.1 0 0 1 25.595 18.595c13.477 15.426 17.19 38.886 24.618 85.814c7.435 46.92 11.149 70.387 3.097 89.214a71.1 71.1 0 0 1-18.591 25.604c-15.423 13.474-38.889 17.187-85.812 24.62c-46.916 7.433-70.382 11.146-89.213 3.096a71.1 71.1 0 0 1-25.595-18.595C18.781 217.45 15.068 193.99 7.633 147.063zm82.762 83.325c12.565-.76 28.748-3.296 52.702-7.09c23.962-3.792 40.12-6.384 52.318-9.545c11.805-3.064 17.247-6.049 20.76-9.121a45.7 45.7 0 0 0 11.95-16.459c1.84-4.288 3-10.385 2.264-22.563c-.76-12.562-3.297-28.749-7.09-52.705c-3.794-23.955-6.38-40.126-9.54-52.312c-3.066-11.81-6.059-17.25-9.124-20.763a45.7 45.7 0 0 0-16.455-11.954c-4.29-1.84-10.388-3-22.57-2.265c-12.565.76-28.74 3.297-52.701 7.09c-23.954 3.8-40.121 6.385-52.31 9.545c-11.813 3.065-17.247 6.057-20.76 9.122a45.7 45.7 0 0 0-11.958 16.458c-1.833 4.289-2.993 10.386-2.257 22.564c.76 12.57 3.29 28.748 7.091 52.704c3.794 23.956 6.379 40.127 9.54 52.313c3.065 11.81 6.05 17.25 9.124 20.763a45.7 45.7 0 0 0 16.455 11.954c4.29 1.84 10.38 3 22.57 2.264z"/></svg>
    },
    {
      name: "Synergy HR",
      svg: <svg className="bg-[#625df5] rounded-full p-1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256"><path fill="white" d="M256 113.765h-74.858l64.83-37.43l-14.237-24.667l-64.83 37.43l37.421-64.825l-24.667-14.246l-37.421 64.826V0h-28.476v74.86L76.326 10.027L51.667 24.266L89.096 89.09L24.265 51.668l-14.238 24.66l64.83 37.43H0v28.477h74.85l-64.823 37.43l14.238 24.667l64.824-37.423l-37.43 64.825l24.667 14.239l37.429-64.832V256h28.476v-74.853l37.422 64.826l24.665-14.239l-37.428-64.832l64.83 37.43l14.24-24.667l-64.825-37.423h74.85v-28.477zM128 166.73c-21.472 0-38.876-17.403-38.876-38.876S106.528 88.977 128 88.977s38.875 17.404 38.875 38.876c0 21.473-17.403 38.876-38.875 38.876"/></svg>
    }
  ];

  const employees = [
    {
      name: "Jerems Dev",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 128 128"><ellipse cx="64" cy="57.09" fill="#47352d" rx="54.5" ry="51.31"/><path fill="#7a4c32" d="M108.63 69.78s8.3 1.44 8.3 10.38c0 7.89-6.06 11-12.11 11V69.78zm-89.26 0s-8.3 1.44-8.3 10.38c0 7.89 6.06 11 12.11 11V69.78z"/><path fill="#9b643c" d="M95.59 42.95C88.03 33.53 75.02 29.5 64 29.5c-11.01 0-24.03 4.04-31.58 13.45c-7.39 9.2-11.26 21.09-11.2 37.04c.06 12.86 3.36 22.75 12.69 30.53c8.64 7.21 18.63 11.1 29.45 11.1c10.64 0 22.38-3.72 30.7-11.04c9.13-8.03 12.67-17.73 12.73-30.59c.06-15.96-3.83-27.84-11.2-37.04"/><path fill="#7a4c32" d="M70.25 89.64c-2.2.62-4.48.93-6.25.93s-4.05-.3-6.25-.93c-.94-.27-1.31.63-.97 1.22c.7 1.23 3.51 3.71 7.22 3.71s6.52-2.48 7.22-3.71c.34-.59-.03-1.48-.97-1.22"/><path fill="#352620" d="M76.93 99.8H51.07c-1.48 0-2.12 1-1.14 2.49c1.37 2.09 6.47 6.11 14.07 6.11s12.7-4.02 14.07-6.11c.98-1.49.35-2.49-1.14-2.49"/><path fill="#42312c" d="M46.88 80.36c0 3.81-2.55 6.9-5.71 6.9s-5.73-3.09-5.73-6.9c0-3.82 2.57-6.91 5.73-6.91s5.71 3.09 5.71 6.91m45.68 0c0 3.81-2.55 6.9-5.71 6.9s-5.73-3.09-5.73-6.9c0-3.82 2.57-6.91 5.73-6.91c3.15 0 5.71 3.09 5.71 6.91"/><path fill="#47352d" d="M18.85 77.4s12.42-13.01 16.98-17.39c.29-.28.76-.04.72.36c-.18 1.81-.32 3.79-.39 4.99c-.03.56.47 1 1.02.9c8.92-1.69 17.5-5.4 19.81-6.44c.28-.13.59.09.58.41c-.05 1.65-.03 3.23-.01 4.2c.01.52.48.91 1 .83c8.18-1.26 15-4.61 17.26-5.82c.52-.28 1.12-.34 1.68-.14c4.24 1.52 9.39 4.52 11.26 5.65c.41.25.94.11 1.18-.31c.72-1.28 1.7-3.27 2.16-4.21c.13-.26.46-.33.67-.12c6.67 6.59 16.39 17.1 16.39 17.1l6.87-22.06S104.9 16.1 66.23 16.1S12.91 57.97 12.91 57.97z"/></svg>
    },
    {
      name: "Sophia Williams",
      svg:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 128 128"><ellipse cx="64" cy="57.09" fill="#312d2d" rx="54.5" ry="51.31"/><path fill="#dba689" d="M108.63 69.78s8.3 1.44 8.3 10.38c0 7.89-6.06 11-12.11 11V69.78zm-89.26 0s-8.3 1.44-8.3 10.38c0 7.89 6.06 11 12.11 11V69.78z"/><path fill="#fadcbc" d="M95.59 42.95C88.03 33.53 75.02 29.5 64 29.5c-11.01 0-24.03 4.04-31.58 13.45c-7.39 9.2-11.26 21.09-11.2 37.04c.06 12.86 3.36 22.75 12.69 30.53c8.64 7.21 18.63 11.1 29.45 11.1c10.64 0 22.38-3.72 30.7-11.04c9.13-8.03 12.67-17.73 12.73-30.59c.06-15.96-3.83-27.84-11.2-37.04"/><path fill="#dba689" d="M70.25 89.64c-2.2.62-4.48.93-6.25.93s-4.05-.3-6.25-.93c-.94-.27-1.31.63-.97 1.22c.7 1.23 3.51 3.71 7.22 3.71s6.52-2.48 7.22-3.71c.34-.59-.03-1.48-.97-1.22"/><path fill="#513f35" d="M76.93 99.8H51.07c-1.48 0-2.12 1-1.14 2.49c1.37 2.09 6.47 6.11 14.07 6.11s12.7-4.02 14.07-6.11c.98-1.49.35-2.49-1.14-2.49"/><path fill="#444" d="M46.88 80.36c0 3.81-2.55 6.9-5.71 6.9s-5.73-3.09-5.73-6.9c0-3.82 2.57-6.91 5.73-6.91s5.71 3.09 5.71 6.91m45.68 0c0 3.81-2.55 6.9-5.71 6.9s-5.73-3.09-5.73-6.9c0-3.82 2.57-6.91 5.73-6.91c3.15 0 5.71 3.09 5.71 6.91"/><path fill="#312d2d" d="M18.85 77.4s12.42-13.01 16.98-17.39c.29-.28.76-.04.72.36c-.18 1.81-.32 3.79-.39 4.99c-.03.56.47 1 1.02.9c8.92-1.69 17.5-5.4 19.81-6.44c.28-.13.59.09.58.41c-.05 1.65-.03 3.23-.01 4.2c.01.52.48.91 1 .83c8.18-1.26 15-4.61 17.26-5.82c.52-.28 1.12-.34 1.68-.14c4.24 1.52 9.39 4.52 11.26 5.65c.41.25.94.11 1.18-.31c.72-1.28 1.7-3.27 2.16-4.21c.13-.26.46-.33.67-.12c6.67 6.59 16.39 17.1 16.39 17.1l6.87-22.06S104.9 16.1 66.23 16.1S12.91 57.97 12.91 57.97z"/></svg>
    },
    {
      name: "Laura Perez",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 128 128"><ellipse cx="64" cy="57.09" fill="#bfa055" rx="54.5" ry="51.31"/><path fill="#c48e6a" d="M108.63 69.78s8.3 1.44 8.3 10.38c0 7.89-6.06 11-12.11 11V69.78zm-89.26 0s-8.3 1.44-8.3 10.38c0 7.89 6.06 11 12.11 11V69.78z"/><path fill="#e0bb95" d="M95.59 42.95C88.03 33.53 75.02 29.5 64 29.5c-11.01 0-24.03 4.04-31.58 13.45c-7.39 9.2-11.26 21.09-11.2 37.04c.06 12.86 3.36 22.75 12.69 30.53c8.64 7.21 18.63 11.1 29.45 11.1c10.64 0 22.38-3.72 30.7-11.04c9.13-8.03 12.67-17.73 12.73-30.59c.06-15.96-3.83-27.84-11.2-37.04"/><path fill="#c48e6a" d="M70.25 89.64c-2.2.62-4.48.93-6.25.93c-1.76 0-4.05-.3-6.25-.93c-.94-.27-1.31.63-.97 1.22c.7 1.23 3.51 3.71 7.22 3.71s6.52-2.48 7.22-3.71c.34-.59-.03-1.48-.97-1.22"/><path fill="#513f35" d="M76.93 99.8H51.07c-1.48 0-2.12 1-1.14 2.49c1.37 2.09 6.47 6.11 14.07 6.11s12.7-4.02 14.07-6.11c.98-1.49.35-2.49-1.14-2.49"/><path fill="#5d4037" d="M46.88 80.36c0 3.81-2.55 6.9-5.71 6.9s-5.73-3.09-5.73-6.9c0-3.82 2.57-6.91 5.73-6.91s5.71 3.09 5.71 6.91m45.68 0c0 3.81-2.55 6.9-5.71 6.9s-5.73-3.09-5.73-6.9c0-3.82 2.57-6.91 5.73-6.91c3.15 0 5.71 3.09 5.71 6.91"/><path fill="#bfa055" d="M18.85 77.4s12.42-13.01 16.98-17.39c.29-.28.76-.04.72.36c-.18 1.81-.32 3.79-.39 4.99c-.03.56.47 1 1.02.9c8.92-1.69 17.5-5.4 19.81-6.44c.28-.13.59.09.58.41c-.05 1.65-.03 3.23-.01 4.2c.01.52.48.91 1 .83c8.18-1.26 15-4.61 17.26-5.82c.52-.28 1.12-.34 1.68-.14c4.24 1.52 9.39 4.52 11.26 5.65c.41.25.94.11 1.18-.31c.72-1.28 1.7-3.27 2.16-4.21c.13-.26.46-.33.67-.12c6.67 6.59 16.39 17.1 16.39 17.1l6.87-22.06S104.9 16.1 66.23 16.1S12.91 57.97 12.91 57.97z"/></svg>
    }
  ];

  const locations = [
    {
      name: "United State",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="circleFlagsUs0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsUs0)"><path fill="#eee" d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"/><path fill="#d80027" d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"/><path fill="#0052b4" d="M0 0h256v256H0Z"/><path fill="#eee" d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"/></g></svg>
    },
    {
      name: "Japan",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="circleFlagsLangJa0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsLangJa0)"><path fill="#eee" d="M0 0h512v512H0z"/><circle cx="256" cy="256" r="111.3" fill="#d80027"/></g></svg>
    },
    {
      name: "Canada",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="circleFlagsCa0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsCa0)"><path fill="#d80027" d="M0 0v512h144l112-64l112 64h144V0H368L256 64L144 0Z"/><path fill="#eee" d="M144 0h224v512H144Z"/><path fill="#d80027" d="m301 289l44-22l-22-11v-22l-45 22l23-44h-23l-22-34l-22 33h-23l23 45l-45-22v22l-22 11l45 22l-12 23h45v33h22v-33h45z"/></g></svg>
    }
  ];

  const [toolsSearch, setToolsSearch] = useState<typeof tools>([]);
  const [teamsSearch, setTeamsSearch] = useState<typeof teams>([]);
  const [employeesSearch, setEmployeesSearch] = useState<typeof employees>([]);
  const [locationsSearch, setLocationsSearch] = useState<typeof locations>([]);

  const [active, setActive] = useState(true);


  return (
    <>
      <div className={"w-full h-screen flex flex-col items-center justify-center text-[1rem] gap-y-1 " + (!active ? "bg-[#7b7b7b]" : "bg-[#c7c7c7]")}>
        <div className="w-3/5 flex flex-row items-center justify-start">
            <button 
              onClick={() => setActive(!active)}
              className={"outline-none cursor-pointer relative w-[4rem] h-[2rem] flex flex-row items-center justify-between rounded-full inset-ring-1 " + (active ? "bg-[#fdfdfb] inset-ring-[#d4d3d3]" : "bg-[#0e0e0e] inset-ring-[#202020]")}>
              <span className="flex flex-row items-center justify-center p-2 rounded-full">
                {!active ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-sun"
                    viewBox="0 0 24 24" 
                    fill="#aeaeb6"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                  :
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-back-sun"
                    viewBox="0 0 24 24" 
                    fill="#696871"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                }
              </span>
              <span className="flex flex-row items-center justify-center p-2 rounded-full">
                {!active ?
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-moon"
                    viewBox="0 0 24 24" 
                    fill="white"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                :
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15px" 
                    className="transition-change-back-moon"
                    viewBox="0 0 24 24" 
                    fill="currentColor"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>
                }
              </span>
              <span
                className={"outline-none absolute text-transparent bg-[#aeaeb634] flex flex-row items-center justify-center p-[0.97rem] rounded-full inset-ring-1" + (!active ? "  transition-change inset-ring-[#202020]" : " inset-ring-[#d4d3d3] transition-change-back")}
              >
              </span>
            </button>
        </div>
        <div className={"w-3/5 flex flex-col items-center justify-start rounded-2xl gap-y-1 pb-1 " + (!active ? "bg-black" : "bg-white")}>
          <div className="w-full flex flex-row items-center justify-between py-3 px-6">
            <div className="w-[95%] flex flex-row items-center justify-start gap-x-4">
              <Search size={19} color='#384fb1' /> 
              <input
                className={"w-[90%] bg-transparent border-none focus:outline-none placeholder:text-[#949494] " + (!active ? "text-white" : "text-black")} 
                type="text"
                value={input}
                onChange={(e) => change(e.target.value)} 
                placeholder="Search HR tools or press..." />
            </div>
            <span className={"flex flex-row items-center justify-center text-[0.800rem] text-[#949494] py-1 px-2 rounded-lg inset-ring-1 " + (!active ? "inset-ring-[#292929]" : "inset-ring-[#eaeaea]")}>
              <Command size={10} />K
            </span>
          </div>
          <hr className={"w-full " + (!active ? "border-1 border-[#292929]" : "border-[0.5px solid] border-[#d4d3d3]")} />
          <div className="w-full flex flex-col items-center justify-center py-3 px-6 gap-y-2">
            <div className="w-full flex flex-row items-center justify-start text-[#949494]">
              Recent
            </div>
            <div className="w-full flex flex-row items-center justify-start gap-x-3">
              <span className={"py-1 px-2 rounded-lg " + (!active ? "bg-[#292929] text-[#949494]" : "bg-[#f6f6f6]")}>OnBoarding</span>
              <span className={"py-1 px-2 rounded-lg " + (!active ? "bg-[#292929] text-[#949494]" : "bg-[#f6f6f6]")}>Reviews</span>
              <span className={"py-1 px-2 rounded-lg " + (!active ? "bg-[#292929] text-[#949494]" : "bg-[#f6f6f6]")}>Hiring</span>
              <span className={"py-1 px-2 rounded-lg " + (!active ? "bg-[#292929] text-[#949494]" : "bg-[#f6f6f6]")}>Benefits</span>
              <span className={"py-1 px-2 rounded-lg " + (!active ? "bg-[#292929] text-[#949494]" : "bg-[#f6f6f6]")}>Learning</span>
            </div>
          </div>
          <div className={"w-full flex flex-col items-center justify-center border-t-1 border-b-1 "  + (!active ? "border-[#292929]" : "border-[#d4d3d3]")}>
            <div className="w-full h-[10rem] flex flex-row items-center justify-between">
              <div className={"w-1/2 h-full flex flex-col items-center justify-start px-2 border-r-1 border-b-1 pb-2 " + (!active ? "border-[#292929]" : "border-[#d4d3d3]")}>
                <div className="w-full flex flex-row items-center justify-between text-[#949494] pl-4 pr-4 pt-4 pb-2">
                  <span>Tools & Apps</span>
                  <ArrowUpRight size={17} color='#949494' />
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-x-2">
                  {input.length > 0 ? 
                    toolsSearch.map((tool, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"p-1 rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {tool.svg}
                          </span>
                          <span>
                            {tool.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  :
                    tools.map((tool, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"p-1 rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {tool.svg}
                          </span>
                          <span>
                            {tool.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  }
                </div>
              </div>
              <div className={"w-1/2 h-full flex flex-col items-center justify-start px-2 border-b-1 pb-2 "  + (!active ? "border-[#292929]" : "border-[#d4d3d3]")}>
                <div className="w-full flex flex-row items-center justify-between text-[#949494] pl-4 pr-4 pt-4 pb-2">
                  <span>Employees</span>
                  <ArrowUpRight size={17} color='#949494' />
                </div>
                <div className="w-full flex flex-col items-start justify-start">
                  {input.length > 0 ?
                    employeesSearch.map((employee, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"relative rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {employee.svg}
                            <span className="absolute z-1 right-0 mt-[-5px] border-1 border-white bg-green-400 w-[5px] h-[5px] rounded-full"></span>
                          </span>
                          <span>
                            {employee.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  :
                    employees.map((employee, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"relative rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {employee.svg}
                            <span className="absolute z-1 right-0 mt-[-5px] border-1 border-white bg-green-400 w-[5px] h-[5px] rounded-full"></span>
                          </span>
                          <span>
                            {employee.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="w-full h-[10rem] flex flex-row items-center justify-between">
              <div className={"w-1/2 h-full flex flex-col items-center justify-start px-2 pb-2 border-r-1 "  + (!active ? "border-[#292929]" : "border-[#d4d3d3]")}>
                <div className="w-full flex flex-row items-center justify-between text-[#949494] pl-4 pr-4 pt-4 pb-2">
                  <span>Teams</span>
                  <ArrowUpRight size={17} color='#949494' />
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-x-2">
                  {input.length > 0 ?
                    teamsSearch.map((team, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"p-1 rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {team.svg}
                          </span>
                          <span>
                            {team.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  :
                    teams.map((team, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"p-1 rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {team.svg}
                          </span>
                          <span>
                            {team.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  }
                </div>
              </div>
              <div className="w-1/2 h-full flex flex-col items-center justify-start px-2 pb-2">
                <div className="w-full flex flex-row items-center justify-between text-[#949494] pl-4 pr-4 pt-4 pb-2">
                  <span>Locations</span>
                  <ArrowUpRight size={17} color='#949494' />
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-x-2">
                  {input.length > 0 ?
                    locationsSearch.map((location, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {location.svg}
                          </span>
                          <span>
                            {location.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  :
                    locations.map((location, index) =>(
                      <a key={index} className={"w-full flex flex-row items-center justify-between py-1 px-3 rounded-lg hover-a cursor-pointer " + (!active ? "hover:bg-[#292929] text-[#919191]" : "hover:bg-[#f6f6f6] text-[#949494]")}>
                        <div className="flex flex-row items-center justify-center gap-x-2">
                          <span className={"rounded-full " + (!active ? "bg-black" : "bg-white")}>
                            {location.svg}
                          </span>
                          <span>
                            {location.name}
                          </span>
                        </div>
                        <span className={"p-1 rounded-lg opacity-0 " + (!active ? "bg-black" : "bg-white")}>
                          <ChevronRight size={17} color={(!active ? "#919191" : "black")} />
                        </span>
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between pl-6 pr-6 py-3 text-[#979797]">
            <div className="flex flex-row items-center gap-x-2">
              <span className={"p-1 rounded-lg " + (!active ? "bg-[#292929] text-[#979797]" : "bg-[#f6f6f6]")}>
                <ArrowUp size={15} />
              </span>
              <span className={"p-1 rounded-lg " + (!active ? "bg-[#292929] text-[#979797]" : "bg-[#f6f6f6]")}>
                <ArrowDown size={15} />
              </span>
              <span>
                Navigate
              </span>
              <span className={"p-1 rounded-lg " + (!active ? "bg-[#292929] text-[#979797]" : "bg-[#f6f6f6]")}>
                <CornerDownLeft size={15} />
              </span>
              <span>
                Select
              </span>
            </div>
            <div className="flex flex-row items-center justify-end gap-x-1">
              <span>Any problem ?</span>
              <p className={"underline " + (!active ? "text-white" : "text-black")}>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
