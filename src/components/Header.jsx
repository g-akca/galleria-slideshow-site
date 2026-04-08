import logoImg from "/assets/shared/logo.svg";

function Header({ showStarted, startShow, stopShow }) {
  return (
    <header className="p-6 tablet:pt-7.5 tablet:px-10 desktop:py-10 desktop:px-0 desktop:mx-10 flex justify-between items-center border-b border-grey-150">
      <img src={logoImg} alt="Logo image" className="h-8 desktop:h-12" />

      <button 
        type="button" 
        className="uppercase font-bold text-[9px] tablet:text-[12px] leading-[125%] tracking-[2px] tablet:tracking-[2.5px] cursor-pointer"
        onClick={showStarted ? stopShow : startShow}
      >
        {showStarted ? "Stop Slideshow" : "Start Slideshow"}
      </button>
    </header>
  )
}

export default Header;