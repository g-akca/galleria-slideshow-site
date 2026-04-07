import logoImg from "/assets/shared/logo.svg";

function Header() {
  return (
    <header className="p-6 flex justify-between items-center border-b border-grey-150">
      <img src={logoImg} alt="Logo image" className="h-8" />

      <button type="button" className="uppercase font-bold text-[9px] leading-[125%] tracking-[2px] cursor-pointer">
        Start Slideshow
      </button>
    </header>
  )
}

export default Header;