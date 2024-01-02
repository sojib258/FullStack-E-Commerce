import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import styles from "./socialIcon.module.scss";

interface socialIconProps {
  customStyle?: object;
}

const SocialIcon: React.FC<socialIconProps> = ({ customStyle }) => {
  return (
    <>
      <Stack style={customStyle} className={styles.socialIcons}>
        <IconButton className={styles.socialIcons__wrapper}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2016_699)">
              <path
                d="M11.9981 2.98875H13.6414V0.12675C13.3579 0.08775 12.3829 0 11.2474 0C8.87813 0 7.25513 1.49025 7.25513 4.22925V6.75H4.64062V9.9495H7.25513V18H10.4606V9.95025H12.9694L13.3676 6.75075H10.4599V4.5465C10.4606 3.62175 10.7096 2.98875 11.9981 2.98875Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_2016_699">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </IconButton>
        <IconButton className={styles.socialIcons__wrapper}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2016_703)">
              <path
                d="M18 3.41888C17.3306 3.7125 16.6174 3.90713 15.8737 4.00163C16.6388 3.54488 17.2226 2.82713 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95238 8.85938 6.22013C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63638 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1333C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64863 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16588 18 3.41888Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_2016_703">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </IconButton>
        <IconButton className={styles.socialIcons__wrapper}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="pinterest 1">
              <path
                id="Vector"
                d="M9.24446 0C4.31112 0 1.6875 3.16139 1.6875 6.60855C1.6875 8.20724 2.58079 10.2008 4.01073 10.8331C4.22786 10.931 4.34599 10.8894 4.39437 10.688C4.43712 10.535 4.62501 9.79807 4.71614 9.45042C4.74426 9.33904 4.72964 9.24229 4.63963 9.13766C4.16486 8.58864 3.78797 7.58847 3.78797 6.65017C3.78797 4.24594 5.69943 1.91146 8.95195 1.91146C11.7646 1.91146 13.7323 3.73854 13.7323 6.35204C13.7323 9.30529 12.1696 11.3484 10.1389 11.3484C9.01495 11.3484 8.17792 10.4663 8.44343 9.37505C8.76407 8.07561 9.39297 6.6783 9.39297 5.74113C9.39297 4.90072 8.9182 4.20544 7.94841 4.20544C6.80423 4.20544 5.87606 5.33837 5.87606 6.85943C5.87606 7.82585 6.21808 8.47838 6.21808 8.47838C6.21808 8.47838 5.08628 13.0506 4.87589 13.9045C4.52038 15.3502 4.92427 17.6914 4.95915 17.8928C4.98052 18.0042 5.1054 18.0391 5.17516 17.9479C5.28654 17.8017 6.6546 15.8497 7.03824 14.4389C7.17775 13.9248 7.7504 11.84 7.7504 11.84C8.12729 12.5207 9.21521 13.0911 10.374 13.0911C13.8212 13.0911 16.312 10.0613 16.312 6.30141C16.2997 2.69675 13.2148 0 9.24446 0Z"
                fill="#4D4D4D"
              />
            </g>
          </svg>
        </IconButton>
        <IconButton className={styles.socialIcons__wrapper}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2016_711)">
              <path
                d="M17.982 5.29205C17.9398 4.33564 17.7852 3.67812 17.5636 3.10836C17.335 2.50359 16.9834 1.96213 16.5227 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03299 0C6.58916 0 6.28327 0.0105764 5.32329 0.0527447C4.36688 0.0949129 3.70936 0.249713 3.13975 0.471131C2.53483 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731077 2.50716 0.505951 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875658 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839946 12.7115C0.126163 13.6679 0.280963 14.3254 0.502517 14.8952C0.731077 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.5384 17.3038 3.13618 17.5288C3.70936 17.7504 4.36331 17.905 5.31986 17.9472C6.2797 17.9895 6.58573 17.9999 9.02956 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0277 11.4456 18.0277 9.00176C18.0277 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3223 13.5202 16.1747 13.9949 16.0516 14.3114C15.7491 15.0956 15.1268 15.7179 14.3426 16.0204C14.0261 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03657 16.3824C6.6349 16.3824 6.34659 16.372 5.40062 16.3297C4.52155 16.2911 4.04684 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39775 15.0568 2.16919 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71564 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71564 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.16919 3.31234 2.39775 2.95727 2.70021 2.66883C2.99195 2.36994 3.34358 2.14138 3.73395 1.99729C4.05042 1.87422 4.52869 1.72656 5.40419 1.68783C6.3536 1.64566 6.63847 1.63508 9.04 1.63508C11.4452 1.63508 11.73 1.64566 12.6759 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.3799 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3223 4.49731 16.3611 5.37295C16.4032 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4032 11.6917 16.3611 12.6411Z"
                fill="#4D4D4D"
              />
              <path
                d="M9.03411 4.37778C6.48135 4.37778 4.41016 6.44883 4.41016 9.00173C4.41016 11.5546 6.48135 13.6257 9.03411 13.6257C11.587 13.6257 13.6581 11.5546 13.6581 9.00173C13.6581 6.44883 11.587 4.37778 9.03411 4.37778ZM9.03411 12.0012C7.37801 12.0012 6.03466 10.658 6.03466 9.00173C6.03466 7.34549 7.37801 6.00229 9.03411 6.00229C10.6903 6.00229 12.0335 7.34549 12.0335 9.00173C12.0335 10.658 10.6903 12.0012 9.03411 12.0012Z"
                fill="#4D4D4D"
              />
              <path
                d="M14.9189 4.19496C14.9189 4.79109 14.4355 5.27445 13.8393 5.27445C13.2431 5.27445 12.7598 4.79109 12.7598 4.19496C12.7598 3.5987 13.2431 3.11548 13.8393 3.11548C14.4355 3.11548 14.9189 3.5987 14.9189 4.19496Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_2016_711">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </IconButton>
      </Stack>
    </>
  );
};

export default SocialIcon;