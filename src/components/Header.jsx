import logoImg from "/assets/shared/logo.svg";

function Header() {
  return (
    <header className="p-6 tablet:pt-7.5 tablet:px-10 flex justify-between items-center border-b border-grey-150">
      <img src={logoImg} alt="Logo image" className="h-8" />

      <button type="button" className="uppercase font-bold text-[9px] tablet:text-[12px] leading-[125%] tracking-[2px] tablet:tracking-[2.5px] cursor-pointer">
        Start Slideshow
      </button>
    </header>
  )
}

export default Header;