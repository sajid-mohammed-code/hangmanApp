export function getButtonStyle(styleType){
  if(styleType === 'primery'){
    return 'bg-green-500'
  }else if (styleType === 'secondry'){
      return 'bg-gry-500'
  }else if (styleType === 'success'){
      return 'bg-blue-500'
  }else if(styleType === 'error'){
      return 'bg-red-500'
  }else if(styleType === 'warning'){
      return 'bg-yellow-500'
  } 
}