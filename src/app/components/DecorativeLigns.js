// components/DecorativeLines.js

export default function DecorativeLines() {
  return (
    <div className="flex items-center my-4">
      <div className=" border-t flex-1 h-2 w-2/4 bg-light-cyan "></div>

      <div>
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>

      <div className="border-t flex-1 h-2 w-2/4 bg-light-cyan"></div>
    </div>
  );
}
